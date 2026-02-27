import axios from "axios";

const api = axios.create({
  baseURL: "https://medilink-1-c765.onrender.com/api",
});

export default api;