import { ILoginResponse, IMemberResponse } from "../../types/Login.types";
import { instance, refreshInstance } from "../instance";

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
  const response = await refreshInstance.get("/member/refresh", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return response.data;
};

export const getUserInfoService = async (): Promise<IMemberResponse> => {
  return await instance.get("/member");
};
