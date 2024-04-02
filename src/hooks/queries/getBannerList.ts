import { useQuery } from "@tanstack/react-query";
import { getBannerListService } from "../../api/services/Main.services";
import { IBannerListData } from "../../types/BannerList.types";

export const getBannerList = () => {
  return useQuery<IBannerListData[]>({
    queryKey: ["getBannerList"],
    queryFn: async (): Promise<IBannerListData[]> => {
      const response = await getBannerListService();
      return response.data;
    },
  });
};
