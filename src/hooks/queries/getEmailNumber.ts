import { useMutation } from "@tanstack/react-query";
import { getEmailNumberService } from "../../api/services/SignUp.services";
import { Dispatch, SetStateAction } from "react";

export interface IEmailNumberResponse {
  code: number;
  message: string;
  data: string;
}

export const getEmailNumber = (
  email: string,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
  setToastContents: Dispatch<SetStateAction<string>>,
) => {
  return useMutation<IEmailNumberResponse>({
    mutationFn: async () => await getEmailNumberService(email),
    onSuccess: () => {
      setIsToastOpen(true);
      setToastContents("인증번호 전송이 완료되었습니다.");
    },
  });
};
