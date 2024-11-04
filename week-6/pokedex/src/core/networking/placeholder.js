import axios from "axios";

const PLACEHOLDER_API = axios.create({
  baseURL: import.meta.env.VITE_PLACEHOLDER_API_URL,
});

export default PLACEHOLDER_API;
