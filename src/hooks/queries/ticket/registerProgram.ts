import { useMutation } from "@tanstack/react-query";
import { registerProgramService } from "../../../api/services/Ticket.services";
import { Dispatch, SetStateAction } from "react";

export interface IRegisterProgramResponse {
  code: number;
  message: string;
  data: {
    id: number;
    message: string;
  };
}

export const registerProgram = (
  productId: number,
  trainerId: number | null,
  registrationAt: string,
  setIsRegisterModalOpen: Dispatch<SetStateAction<boolean>>,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<IRegisterProgramResponse>({
    mutationFn: async () =>
      await registerProgramService(productId, trainerId, registrationAt),
    onSuccess: () => {
      setIsRegisterModalOpen(false);
      setIsToastOpen(true);
    },
  });
};
