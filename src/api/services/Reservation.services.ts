import { ICancelUserReservationResponse } from "../../hooks/queries/reservation/cancelUserReservation";
import { IRegisterUserReservationResponse } from "../../hooks/queries/reservation/registerUserReservation";
import { ITrainerReservationResponse } from "../../types/reservation/TrainerReservation.types";
import { IUserScheduleResponse } from "../../types/reservation/UserReservation.types";
import { instance } from "../instance";

export const getUserScheduleService = async (
  date: string,
  option?: string,
): Promise<IUserScheduleResponse> => {
  return await instance.get("/reservation", {
    params: { date, option: option ?? "ALL" },
  });
};

export const getTrainerReservationService = async (
  trainerId: number,
  date: string,
): Promise<ITrainerReservationResponse> => {
  return await instance.get(`/reservation/trainer/${trainerId}`, {
    params: { date },
  });
};

export const registerUserReservationService = async (
  reservationId: number,
  programId: number,
): Promise<IRegisterUserReservationResponse> => {
  return await instance.post(`/reservation/${reservationId}`, {
    programId,
  });
};

export const cancelUserReservationService = async (
  reservationId: number,
): Promise<ICancelUserReservationResponse> => {
  return await instance.delete(`/reservation/${reservationId}`);
};

export const registerTrainerScheduleService = async (
  reservationDate: string,
  reservationTimes: string[],
) => {
  return await instance.put("/reservation/change/", {
    reservationDate,
    reservationTimes,
  });
};
