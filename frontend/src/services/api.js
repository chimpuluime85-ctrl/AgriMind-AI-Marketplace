import axios from "axios";

const api = axios.create({
  baseURL: "https://agrimind-backend-gl8g.onrender.com/api",
});

export default api;