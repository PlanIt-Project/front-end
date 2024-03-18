import { instance } from "../instance";

export const getBannerListService = async () => {
  return await instance.get("/banner");
};
