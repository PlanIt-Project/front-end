import axios from "axios";
import { getRefreshTokenService } from "./services/Login.services";
import { useAuthStore } from "../stores/authStore";

const retryCounts: Record<string, number> = {};

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

    const requestKey = originalRequest.url;
    retryCounts[requestKey] = (retryCounts[requestKey] || 0) + 1;

    if (status === 401) {
      originalRequest._retryCount = Number(originalRequest._retryCount) + 1;

      if (retryCounts[requestKey] > 3) {
        alert("재로그인이 필요합니다. 로그인 페이지로 돌아갑니다.");
        window.location.href = "/login";
        useAuthStore.setState({
          accessToken: "",
          refreshToken: "",
          user: null,
        });
      }

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
