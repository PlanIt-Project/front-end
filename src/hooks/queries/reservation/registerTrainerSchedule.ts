import { useMutation } from "@tanstack/react-query";
import { registerTrainerScheduleService } from "../../../api/services/Reservation.services";
import { Dispatch, SetStateAction } from "react";

export const registerTrainerSchedule = (
  reservationDate: string,
  reservationTimes: string[],
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation({
    mutationFn: async () =>
      await registerTrainerScheduleService(reservationDate, reservationTimes),
    onSuccess: () => {
      setIsToastOpen(true);
    },
  });
};
