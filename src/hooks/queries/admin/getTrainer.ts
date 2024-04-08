import { useQuery } from "@tanstack/react-query"
import { getAdminTrainerServices } from "../../../api/services/admin/Trainer.sevices"
import { IAdminTrainerData } from "../../../types/admin/Admin.trainer.types";

export const getAdminTrainer = (page: number, size: number) => {
    return useQuery<IAdminTrainerData, Error>({
        queryKey: ["getAdminTrainer", page],
        queryFn: async (): Promise<IAdminTrainerData> => {
            const response = await getAdminTrainerServices(page, size);

            return response.data
        }
    })
}