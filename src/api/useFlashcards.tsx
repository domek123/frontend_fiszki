import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { flashcardService } from '@api/flashcardService';

export const useFlashcards = () => {
  return useQuery({
    queryKey: ['flashcards'],
    queryFn: flashcardService.getAll,
  });
};

export const useFlashcardsBySet = (setId) => {
  return useQuery({
    queryKey: ['flashcards', 'set', setId],
    queryFn: () => flashcardService.getBySet(setId),
    enabled: !!setId,
  });
};

export const useCreateFlashcard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: flashcardService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['flashcards'] });
    },
  });
};
