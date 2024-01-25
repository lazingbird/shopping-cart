import axios from "axios";

const baseUrl = "https://api.rawg.io/api/games/";
const API_KEY = import.meta.env.VITE_API_KEY;

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const getById = async (id) => {
  let response = await axios.get(`${baseUrl}${id}?key=${API_KEY}`);
  return response.data;
};

export default { getById };
