import { api } from "./api";

// Pobierz wszystkie fiszki
export const getFlashcards = async () => {
  const res = await api.get("/flashcards");
  return res.data;
};

// Pobierz fiszki z danego setu
export const getFlashcardsBySet = async (setId) => {
  const res = await api.get(`/flashcards/set/${setId}`);
  return res.data;
};

// Pobierz losowe fiszki z setu
export const getRandomFlashcards = async (setId, limit = 5) => {
  const res = await api.get(`/flashcards/random/${setId}?limit=${limit}`);
  return res.data;
};

// Dodaj nową fiszkę
export const createFlashcard = async (flashcardData) => {
  const res = await api.post("/flashcards", flashcardData);
  return res.data;
};
