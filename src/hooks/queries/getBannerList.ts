import { useQuery } from "@tanstack/react-query";
import { getBannerListService } from "../../api/services/Main.services";

export const getBannerList = () => {
  return useQuery<any>({
    queryKey: ["getBannerList"],
    queryFn: async () => {
      const response = await getBannerListService();
      return response.data;
    },
  });
};
