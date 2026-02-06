import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SetType } from '@/types';
import { useCreateSet } from '@/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateSetStackParamList, RootStackParamList } from '@navigation/navigation.types';

export const useCreateSetLogic = () => {
  const navigation = useNavigation<NativeStackNavigationProp<CreateSetStackParamList>>();
  const { mutateAsync: serverCreateSet, isPending } = useCreateSet();

  const [setData, setSetData] = useState<SetType>({
    id: '',
    name: '',
    description: '',
    languageFrom: '',
    languageTo: 'pl',
    flashcards: [],
  });

  const [flashcardName, setFlashcardName] = useState('');
  const [flashcardDefinition, setFlashcardDefinition] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const handleChange = (field: keyof SetType, value: string) => {
    setSetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateSet = async () => {
    if (!setData.name || !setData.languageFrom) return;

    try {
      const payload = {
        name: setData.name,
        description: setData.description,
        languageFrom: setData.languageFrom,
        languageTo: setData.languageTo,
        user_id: '5e11c274-74b0-4cd4-8e7d-e96b6ceeef0f',
        flashcards: setData.flashcards.map(({ front, back }) => ({
          front,
          back,
        })),
      };

      await serverCreateSet(payload);

      navigation.goBack();
    } catch (error) {
      console.error('Failed to create set:', error);
    }
  };

  //handle create or edit flashcard functionality
  const handleFlashCard = () => {
    const front = flashcardName.trim();
    const back = flashcardDefinition.trim();
    if (!front || !back) return;

    setSetData((prev) => {
      if (editId) {
        return {
          ...prev,
          flashcards: prev.flashcards.map((fc) => (fc.id === editId ? { ...fc, front, back } : fc)),
        };
      } else {
        return {
          ...prev,
          flashcards: [...prev.flashcards, { id: Date.now().toString(), front, back }],
        };
      }
    });

    resetFlashCard();
    navigation.navigate('CreateSet');
  };

  const deleteFlashcard = (id: string) => {
    setSetData((prev) => ({
      ...prev,
      flashcards: prev.flashcards.filter((fc) => fc.id !== id),
    }));
  };

  const setupFlashcard = (id: string) => {
    const flashcard = setData.flashcards.find((fc) => fc.id === id);
    if (flashcard) {
      setFlashcardName(flashcard.front);
      setFlashcardDefinition(flashcard.back);
      setEditId(id);
      navigation.navigate('CreateFlashcard');
    }
  };

  const resetFlashCard = () => {
    setFlashcardName('');
    setFlashcardDefinition('');
    setEditId(null);
  };

  const flashcardsData = useMemo(() => {
    return setData.flashcards.toReversed();
  }, [setData.flashcards]);

  return {
    setData,
    handleChange,
    handleCreateSet,
    flashcardsData,
    handleFlashCard,
    deleteFlashcard,
    setupFlashcard,
    resetFlashCard,
    flashcardName,
    setFlashcardName,
    flashcardDefinition,
    setFlashcardDefinition,
    editId,
    isPending, // Informacja dla UI o trwającym wysyłaniu
  };
};
