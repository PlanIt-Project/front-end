import { useQuery } from "@tanstack/react-query";
import { IUserScheduleData } from "../../../types/reservation/UserReservation.types";
import { getUserScheduleService } from "../../../api/services/Reservation.services";

export const getUserSchedule = (date: string) => {
  return useQuery<Record<string, IUserScheduleData[]>, Error>({
    queryKey: ["getUserSchedule", date],
    queryFn: async (): Promise<Record<string, IUserScheduleData[]>> => {
      const response = await getUserScheduleService(date);

      return response.data;
    },
  });
};
