import { useQuery } from "@tanstack/react-query"
import { getAdminAccountServices } from "../../../api/services/admin/Account.services"
import { IAdminAccountData } from "../../../types/admin/Admin.account.types";

export const getAdminAccount = (page:number, size:number) => {
    return useQuery<IAdminAccountData, Error>({
        queryKey: ["getAdminAccount", page],
        queryFn: async (): Promise<IAdminAccountData> => {
            const response = await getAdminAccountServices(page, size);

            return response.data
        }
    })
}