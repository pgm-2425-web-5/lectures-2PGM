import PLACEHOLDER_API from "@core/networking/placeholder";

export const getPosts = () => {
  return PLACEHOLDER_API.get("/posts");
};

export default getPosts;
