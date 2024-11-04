export const getIdFromUrl = (url) => {
  return url.split("/").reverse()[1];
};
