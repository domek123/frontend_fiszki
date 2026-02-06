import { api } from './api';

export const setService = {
  getAll: async () => {
    const res = await api.get('/sets');
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/sets/${id}`);
    return res.data;
  },

  create: async (setData) => {
    const res = await api.post('/sets', setData);
    return res.data;
  },
};
