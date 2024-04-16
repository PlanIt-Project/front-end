import { useQuery } from "@tanstack/react-query"
import { getAdminRequestServices } from "../../../api/services/admin/Request.services"
import { IAdminRequestData } from "../../../types/admin/Admin.Request.types";

export const getAdminRequest = (page: number, size: number, option: string) => {
    return useQuery<IAdminRequestData, Error>({
        queryKey: ["getAdminRequest", option, page],
        queryFn: async (): Promise<IAdminRequestData> => {
            const response = await getAdminRequestServices(page,size,option);

            return response.data;
        }
    })
}