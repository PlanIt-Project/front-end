import axios from "axios";
import { getRefreshTokenService } from "./services/Login.services";
import { useAuthStore } from "../stores/authStore";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const { accessToken } = useAuthStore.getState();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },

  async (error) => {
    return await Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },

  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken } = useAuthStore.getState();

      try {
        const response = await getRefreshTokenService(refreshToken);

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        useAuthStore.setState({ accessToken, refreshToken: newRefreshToken });

        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        originalRequest.headers.Authorization = `Bearer ${accessToken || ""}`;
        return await instance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        useAuthStore.setState({
          user: null,
          accessToken: "",
          refreshToken: "",
        });
      }
    }
    return await Promise.reject(error);
  },
);
