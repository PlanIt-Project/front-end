import { LoginParams } from "../../types/Login.types";
import { instance } from "../instance";

export const getBannerListService = async () => {
  return await instance.get("/banner");
};

export const LoginService = async (user: LoginParams) => {
  const res = await instance.post("/member/signin", {
    email: user.email,
    password: user.password,
  });
  return res.data;
};
