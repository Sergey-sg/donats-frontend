import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000/api/",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const refresh = localStorage.getItem("refreshToken");
    if ( error.response.status === 401 && error.config && refresh ) {

      try {
        const response = await api.post("auth/refresh/", refresh);

        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);

        return api.request(error.config);
      } catch (e) {
        console.log("Unauthorized");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }
    throw error;
  }
);
