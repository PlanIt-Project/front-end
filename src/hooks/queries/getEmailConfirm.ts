import { useMutation } from "@tanstack/react-query";
import { getEmailConfirmService } from "../../api/services/SignUp.services";
import { Dispatch, SetStateAction } from "react";

export interface IEmailConfirmResponse {
  code: number;
  message: string;
  data: string;
}

export const getEmailConfirm = (
  email: string,
  emailConfirmNumber: string,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
  setToastContents: Dispatch<SetStateAction<string>>,
) => {
  return useMutation<IEmailConfirmResponse>({
    mutationFn: async () =>
      await getEmailConfirmService(email, emailConfirmNumber),
    onSuccess: () => {
      setIsToastOpen(true);
      setToastContents("이메일 인증이 완료되었습니다.");
    },
  });
};
