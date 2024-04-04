import { useQuery } from "@tanstack/react-query";
import { getTrainerWorkScheduleService } from "../../../api/services/Reservation.services";
import { formatDateToDayName } from "../../../utils/formatDateToDayName";
import { ITrainerWorkScheduleData } from "../../../types/reservation/TrainerWorkSchedule.types";
import { useAuthStore } from "../../../stores/authStore";

export const getTrainerWorkSchedule = (date: string) => {
  const { user } = useAuthStore((state) => state);

  const dayName = formatDateToDayName(date);

  return useQuery<ITrainerWorkScheduleData[]>({
    queryKey: ["getTrainerWorkSchedule", date],
    queryFn: async (): Promise<ITrainerWorkScheduleData[]> => {
      const response = await getTrainerWorkScheduleService(
        user?.trainerInfo.id ?? 0,
      );
      const filteredSchedules = response.data.filter(
        (schedule) => schedule.week === dayName,
      );

      return filteredSchedules;
    },
  });
};
