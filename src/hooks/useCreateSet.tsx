import { useEffect, useState } from "react";

export const useCreateSet = () => {
  const [setData, setSetData] = useState({
    name: "",
    description: "",
    languageFrom: "",
    languageTo: "pl",
  });

  const [flashcards, setFlashcards] = useState([]);

  const handleChange = (field: string, value: string) => {
    setSetData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    setData,
    handleChange,
    flashcards,
    setFlashcards,
  };
};
