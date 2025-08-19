import { useState } from "react";
import { useFlashcards } from "./useFlashcards";
import { createSet } from "@api/sets.api";
import { useNavigation } from "@react-navigation/native";
export const useCreateSet = () => {
  const flashcards = useFlashcards();
  const navigation = useNavigation();

  const [setData, setSetData] = useState({
    name: "",
    description: "",
    languageFrom: "",
    languageTo: "pl",
  });

  const handleChange = (field: string, value: string) => {
    setSetData((prev) => ({ ...prev, [field]: value }));
  };
  const handleCreateSet = async () => {
    if (setData.name && setData.languageFrom) {
      const result = await createSet({
        user_id: "5e11c274-74b0-4cd4-8e7d-e96b6ceeef0f",
        ...setData,
        flashcards: flashcards.flashcards,
      });

      if (result) {
        console.log("Set created successfully");
      }
      navigation.navigate("Home");
    }
  };

  return {
    ...flashcards,
    setData,
    handleChange,
    handleCreateSet,
  };
};
