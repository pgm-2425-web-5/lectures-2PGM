import API from "@core/networking/api";

export const getGames = (offset = 0, limit = 40) => {
  return API.get(`/version/?offset=${offset}&limit=${limit}`);
};
