import { ITrainerReservationResponse } from "../../types/reservation/TrainerReservation.types";
import { IUserScheduleResponse } from "../../types/reservation/UserReservation.types";
import { instance } from "../instance";

export const getUserScheduleService = async (
  date: string,
): Promise<IUserScheduleResponse> => {
  return await instance.get("/reservation", { params: { date } });
};

export const getTrainerReservationService = async (
  trainerId: number,
  date: string,
): Promise<ITrainerReservationResponse> => {
  return await instance.get(`/reservation/trainer/${trainerId}`, {
    params: { date },
  });
};
