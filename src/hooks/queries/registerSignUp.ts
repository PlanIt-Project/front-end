import { useMutation } from "@tanstack/react-query";
import { registerSignUpService } from "../../api/services/SignUp.services";
import { Dispatch, SetStateAction } from "react";

export interface IRegisterSignUpResponse {
  code: number;
  message: string;
  data: string;
}

export const registerSignUp = (
  email: string,
  password: string,
  name: string,
  birth: string,
  gender: string,
  number: string,
  address: string,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
  setToastContents: Dispatch<SetStateAction<string>>,
) => {
  return useMutation<IRegisterSignUpResponse>({
    mutationFn: async () =>
      await registerSignUpService(
        email,
        password,
        name,
        birth,
        gender,
        number,
        address,
      ),
    onSuccess: () => {
      setIsToastOpen(true);
      setToastContents("회원가입이 완료되었습니다.");
    },
  });
};
