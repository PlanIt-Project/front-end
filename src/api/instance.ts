import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// TODO 로그인 구현 필요
instance.interceptors.request.use(
  async (config) => {
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

  (err) => {
    console.log(err);
  },
);
