import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
export const useCreateSet = () => {
  const navigation = useNavigation();

  const [setData, setSetData] = useState({
    name: "",
    description: "",
    languageFrom: "",
    languageTo: "pl",
    flashcards: [],
  });
  const [flashcardName, setFlashcardName] = useState("");
  const [flashcardDefinition, setFlashcardDefinition] = useState("");

  const handleChange = (field: string, value: string) => {
    setSetData((prev) => ({ ...prev, [field]: value }));
  };

  const addFlashCard = () => {
    if (flashcardName && flashcardDefinition) {
      setSetData((prev) => ({
        ...prev,
        flashcards: [
          ...prev.flashcards,
          { front: flashcardName, back: flashcardDefinition },
        ],
      }));
      navigation.navigate("CreateSet");
      setFlashcardName("");
      setFlashcardDefinition("");
    }
  };

  const deleteFromFlashcard = (id: number) => {
    setSetData((prev) => ({
      ...prev,
      flashcards: prev.flashcards.filter((_, index) => index !== id),
    }));
  };

  const flashcards = useMemo(() => {
    return [...setData.flashcards].reverse();
  }, [setData.flashcards]);

  return {
    setData,
    handleChange,
    flashcardName,
    setFlashcardName,
    flashcardDefinition,
    addFlashCard,
    setFlashcardDefinition,
    deleteFromFlashcard,
    flashcards,
  };
};
