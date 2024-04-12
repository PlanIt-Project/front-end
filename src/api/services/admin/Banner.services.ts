import { IAdminBannerResponse } from "../../../types/admin/Admin.banner.types";
import { instance } from "../../instance";

export const getAdminBannerServices = async (
  page: number,
  size: number,
): Promise<IAdminBannerResponse> => {
  return await instance.get("/admin/banner", {
    params: { page, size },
  });
};
