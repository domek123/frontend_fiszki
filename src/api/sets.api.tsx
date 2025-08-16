import { api } from "./api";

// Pobierz wszystkie zestawy
export const fetchSets = async () => {
  const res = await api.get("/sets");
  return res.data;
};

// Pobierz pojedynczy zestaw po ID
export const fetchSetById = async (id) => {
  const res = await api.get(`/sets/${id}`);
  return res.data;
};

// Utwórz nowy zestaw
export const createSet = async (setData) => {
  const res = await api.post("/sets", setData);
  return res.data;
};
