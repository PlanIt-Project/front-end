import { instance } from "../instance";

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
  return await instance.post("/member/signup", {
    email,
    password,
    name,
    phone_number: number,
    birth,
    address,
  });
};
