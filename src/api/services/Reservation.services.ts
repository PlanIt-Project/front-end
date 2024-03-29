import { IUserScheduleResponse } from "../../types/reservation/UserReservation.types";
import { instance } from "../instance";

export const getUserScheduleService = async (
  date: string,
): Promise<IUserScheduleResponse> => {
  return await instance.get("/reservation", { params: { date } });
};
