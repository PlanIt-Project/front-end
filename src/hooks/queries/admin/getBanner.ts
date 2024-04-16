import { useQuery } from "@tanstack/react-query"
import { getAdminBannerServices } from "../../../api/services/admin/Banner.services"
import { IAdminBannerData } from "../../../types/admin/Admin.banner.types";

export const getAdminBanner = (page:number, size: number) => {
    return useQuery<IAdminBannerData, Error>({
        queryKey: ["getAdminBanner", page],
        queryFn: async (): Promise<IAdminBannerData> => {
            const response = await getAdminBannerServices(page, size);

            return response.data   
        }
    })
}