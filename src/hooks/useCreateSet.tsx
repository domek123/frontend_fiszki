import { useMemo, useState } from "react";
import { createSet } from "@api/sets.api";
import { useNavigation } from "@react-navigation/native";
import { SetType } from "@/types";
export const useCreateSet = () => {
  const navigation = useNavigation();

  const [setData, setSetData] = useState<SetType>({
    id: "",
    name: "",
    description: "",
    languageFrom: "",
    languageTo: "pl",
    flashcards: [],
  });

  const [flashcardName, setFlashcardName] = useState("");
  const [flashcardDefinition, setFlashcardDefinition] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setSetData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreateSet = async () => {
    if (setData.name && setData.languageFrom) {
      const result = await createSet({
        user_id: "5e11c274-74b0-4cd4-8e7d-e96b6ceeef0f",
        ...setData,
        id: undefined,
        flashcards: setData.flashcards.map((fc) => ({
          front: fc.front,
          back: fc.back,
        })),
      });

      if (result) {
        console.log("Set created successfully");
      }
      navigation.navigate("Home");
    }
  };

  const deleteFlashcard = (id: string) => {
    console.log("delete");
    setSetData((prev) => ({
      ...prev,
      flashcards: prev.flashcards.filter((fc) => fc.id !== id),
    }));
  };

  const handleFlashCard = () => {
    const front = flashcardName.trim();
    const back = flashcardDefinition.trim();
    if (!front && !back) return;
    if (editId) {
      setSetData((prev) => ({
        ...prev,
        flashcards: prev.flashcards.map((fc) =>
          fc.id === editId ? { ...fc, front, back } : fc
        ),
      }));
    } else {
      setSetData((prev) => ({
        ...prev,
        flashcards: [
          ...prev.flashcards,
          { id: Date.now().toString(), front, back },
        ],
      }));
    }

    resetFlashCard();
    navigation.navigate("CreateSet");
  };

  const flashcardsData = useMemo(() => {
    return [...setData.flashcards].reverse();
  }, [setData.flashcards]);

  const setupFlashcard = (id: string) => {
    console.log(id, setData.flashcards);
    const flashcard = [...setData.flashcards].find((fc) => fc.id === id);
    console.log(flashcard);
    if (flashcard) {
      setFlashcardName(flashcard.front);
      setFlashcardDefinition(flashcard.back);
      setEditId(id);
      navigation.navigate("CreateFlashcard");
    }
  };

  const resetFlashCard = () => {
    setFlashcardName("");
    setFlashcardDefinition("");
    setEditId(null);
  };

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
  };
};
