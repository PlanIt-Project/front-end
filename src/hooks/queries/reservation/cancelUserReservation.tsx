import { QueryObserverResult, useMutation } from "@tanstack/react-query";
import { cancelUserReservationService } from "../../../api/services/Reservation.services";
import { Dispatch, SetStateAction } from "react";
import { IUserScheduleData } from "../../../types/reservation/UserReservation.types";

export interface ICancelUserReservationResponse {
  code: number;
  message: string;
  data: string;
}

export const cancelUserReservation = (
  refetch: () => Promise<
    QueryObserverResult<Record<string, IUserScheduleData[]>, Error>
  >,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
  setIsConfirmModalOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<ICancelUserReservationResponse, Error, number>({
    mutationFn: async (reservationId: number) =>
      await cancelUserReservationService(reservationId),
    onSuccess: () => {
      setIsToastOpen(true);
      setIsConfirmModalOpen(false);
      refetch();
    },
  });
};
