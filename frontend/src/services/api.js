import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  // Login/Register requests la token pathvu naka
  if (
    token &&
    config.url !== "/auth/login" &&
    config.url !== "/auth/register"
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;