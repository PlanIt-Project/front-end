import { IBannerListResponse } from "../../types/BannerList.types";
import { instance } from "../instance";

export const getBannerListService = async (): Promise<IBannerListResponse> => {
  return await instance.get("/banner");
};
