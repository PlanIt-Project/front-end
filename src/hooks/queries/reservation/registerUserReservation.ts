import { useMutation } from "@tanstack/react-query";
import { registerUserReservationService } from "../../../api/services/Reservation.services";
import { Dispatch, SetStateAction } from "react";

export interface IRegisterUserReservationResponse {
  code: number;
  message: string;
  data: string;
}

export const registerUserReservation = (
  reservationId: number,
  programId: number,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<IRegisterUserReservationResponse>({
    mutationFn: async () =>
      await registerUserReservationService(reservationId, programId),
    onSuccess: () => {
      setIsToastOpen(true);
    },
  });
};
