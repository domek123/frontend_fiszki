import { api } from './api';

export const flashcardService = {
  getAll: async () => {
    const res = await api.get('/flashcards');
    return res.data;
  },

  getBySet: async (setId) => {
    const res = await api.get(`/flashcards/set/${setId}`);
    return res.data;
  },

  getRandom: async ({ setId, limit = 5 }) => {
    const res = await api.get(`/flashcards/random/${setId}?limit=${limit}`);
    return res.data;
  },

  create: async (flashcardData) => {
    const res = await api.post('/flashcards', flashcardData);
    return res.data;
  },
};
