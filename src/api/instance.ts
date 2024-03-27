import axios from "axios";
import { getRefreshTokenService } from "./services/Login.services";
import { useAuthStore } from "../stores/authStore";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const refreshInstance = axios.create({
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
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;

    if (status === 401 && !originalRequest._retry) {
      try {
        // refreshToken으로 새 토큰 발급
        const { refreshToken } = useAuthStore.getState();
        const response = await getRefreshTokenService(refreshToken);

        if (response) {
          const { accessToken, refreshToken: newRefreshToken } = response.data;

          // 새 토큰 저장
          useAuthStore.setState({
            accessToken,
            refreshToken: newRefreshToken,
          });

          instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          originalRequest._retry = true;

          return await instance(originalRequest);
        } else {
          useAuthStore.setState({
            accessToken: "",
            refreshToken: "",
            user: null,
          });
        }
      } catch (error) {
        console.log(error);
        return await Promise.reject(error);
      }

      return await Promise.reject(error.response?.data);
    }
  },
);
