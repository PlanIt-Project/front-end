import { useQuery } from "@tanstack/react-query"
import { IAdminTrainerScheduleData } from "../../../types/admin/Admin.trainer.types"
import { getAdminTrainerScheduleServices } from "../../../api/services/admin/Trainer.sevices"

export const getAdminTrainerSchedule = (trainerId: number) => {
    return useQuery<IAdminTrainerScheduleData[], Error>({
        queryKey: ["getAdminTrainerSchedule", trainerId],
        queryFn: async (): Promise<IAdminTrainerScheduleData[]> => {
            const response = await getAdminTrainerScheduleServices(trainerId);

            return response.data;
        }
    })
}