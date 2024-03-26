import { ILoginResponse, IMemberResponse } from "../../types/Login.types";
import { instance } from "../instance";

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
  return await instance.get("/member/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};

export const getUserInfoService = async (): Promise<IMemberResponse> => {
  return await instance.get("/member");
};
