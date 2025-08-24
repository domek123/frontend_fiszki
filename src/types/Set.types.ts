import { FlashcardType } from "./Flashcard.types";

export type SetType = {
  id: string;
  name: string;
  description: string;
  languageFrom: string;
  languageTo: string;
  flashcards: FlashcardType[];
};
