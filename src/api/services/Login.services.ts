import { LoginParams } from "../../types/Login.types";
import { instance } from "../instance";

interface LoginRes {
  accessToken: string;
  refreshToken: string;
}

export const LoginService = async (user: LoginParams) => {
  const res: LoginRes = await instance.post("/member/signin", {
    email: user.email,
    password: user.password,
  });
  console.log("res", res);
  return res;
};

interface SignUpParams {
  email: string;
  password: string;
  name: string;
  number: string;
  birth: string;
  address: string;
}

export const SignUpService = async (params: SignUpParams) => {
  const { email, password, name, number, birth, address } = params;
  const res = await instance.post("/member/signup", {
    email,
    password,
    name,
    phone_number: number,
    birth,
    address,
  });
  return res;
};
