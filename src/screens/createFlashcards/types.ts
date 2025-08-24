import { FlashcardType } from "@/types";

export type FlashCardFormType = {
  editId: string | null;
  action: (flashcard: FlashcardType) => void;
  defaultValue?: FlashcardType;
};
