import { ILoginResponse, IMemberResponse } from "../../types/Login.types";
<<<<<<< HEAD
import { instance } from "../instance";
=======
import { instance, refreshInstance } from "../instance";
>>>>>>> 2f401cd28126a553131463197c5bb02d92d1094e

export const loginService = async (
  email: string,
  password: string,
): Promise<ILoginResponse> => {
  return await instance.post("/member/signin", {
    email,
    password,
  });
};

export const getRefreshTokenService = async (
  refreshToken: string,
): Promise<ILoginResponse> => {
<<<<<<< HEAD
  return await instance.get("/member/refresh", {
=======
  const response = await refreshInstance.get("/member/refresh", {
>>>>>>> 2f401cd28126a553131463197c5bb02d92d1094e
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
<<<<<<< HEAD
=======

  return response.data;
>>>>>>> 2f401cd28126a553131463197c5bb02d92d1094e
};

export const getUserInfoService = async (): Promise<IMemberResponse> => {
  return await instance.get("/member");
};
