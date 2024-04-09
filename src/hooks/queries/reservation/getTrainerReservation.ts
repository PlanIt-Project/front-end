import { useQuery } from "@tanstack/react-query";
import { getTrainerReservationService } from "../../../api/services/Reservation.services";
import { ITrainerReservationResponse } from "../../../types/reservation/TrainerReservation.types";

export const getTrainerReservation = (trainerId: number, date: string) => {
  return useQuery<ITrainerReservationResponse, Error>({
    queryKey: ["getTrainerReservation", trainerId, date],
    queryFn: async (): Promise<ITrainerReservationResponse> => {
      const response = await getTrainerReservationService(trainerId, date);

      return response;
    },
    enabled: trainerId !== -1 && !!date,
  });
};
