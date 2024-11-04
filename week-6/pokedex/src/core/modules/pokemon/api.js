import API from "@core/networking/api";

export const getPokemon = (offset = 0, limit = 40) => {
  return API.get(`/pokemon/?offset=${offset}&limit=${limit}`);
};

export const getPokemonById = (id) => {
  return API.get(`/pokemon/${id}`);
};
