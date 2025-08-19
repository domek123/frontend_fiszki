import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";

export const useFlashcards = () => {
  const navigation = useNavigation();

  const [flashcards, setFlashcards] = useState([]);
  const [flashcardName, setFlashcardName] = useState("");
  const [flashcardDefinition, setFlashcardDefinition] = useState("");

  const deleteFlashcard = (id: number) => {
    setFlashcards((prev) => prev.filter((_, idx) => idx !== id));
  };

  const addFlashCard = () => {
    if (flashcardName && flashcardDefinition) {
      setFlashcards((prev) => [
        ...prev,
        { front: flashcardName, back: flashcardDefinition },
      ]);
      setFlashcardName("");
      setFlashcardDefinition("");
      navigation.navigate("CreateSet");
    }
  };
  const flashcardsData = useMemo(() => {
    return [...flashcards].reverse();
  }, [flashcards]);

  return {
    flashcards,
    setFlashcards,
    deleteFlashcard,
    flashcardsData,
    flashcardName,
    setFlashcardName,
    flashcardDefinition,
    setFlashcardDefinition,
    addFlashCard,
  };
};
