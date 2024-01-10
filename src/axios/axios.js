import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000/api/",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (
      // eslint-disable-next-line
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      const originalRequest = { ...error.config, _isRetry: true };

      try {
        const response = await api.post(
          "auth/refresh/",
          {
            refresh: localStorage.getItem("refresh"),
          }
        );

        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        return await api.request({
          method: originalRequest.method,
          url: originalRequest.url,
        });
      } catch (e) {
        console.log("Unauthorized");
        if (originalRequest._isRetry) {
          localStorage.setItem("access", "");
        }
      }
    }
    throw error;
  }
);