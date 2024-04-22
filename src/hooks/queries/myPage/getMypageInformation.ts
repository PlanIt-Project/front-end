import { useQuery } from "@tanstack/react-query";
import { getMyPageInformationService } from "../../../api/services/MyPage.services";
import { IMyPageInfomationData } from "../../../types/myPage/MyPage.types";

export const getMyPageInformation = () => {
  return useQuery<IMyPageInfomationData, Error>({
    queryKey: ["getMyPageInfomation"],
    queryFn: async (): Promise<IMyPageInfomationData> => {
      const response = await getMyPageInformationService();
      return response.data;
    },
  });
};
