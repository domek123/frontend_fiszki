import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { setService } from '../api/setService';

export const useSets = () => {
  return useQuery({
    queryKey: ['sets'],
    queryFn: setService.getAll,
  });
};

export const useSetDetails = (setId) => {
  return useQuery({
    queryKey: ['sets', setId],
    queryFn: () => setService.getById(setId),
    enabled: !!setId,
  });
};

export const useCreateSet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: setService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sets'] });
    },
    onError: (error) => {
      console.error('Błąd podczas tworzenia zestawu:', error.message);
    },
  });
};
