import {
  IAdminBannerResponse,
  IAdminMakeBannerRes,
} from "../../../types/admin/Admin.banner.types";
import { instance } from "../../instance";

export const getAdminBannerServices = async (
  page: number,
  size: number,
): Promise<IAdminBannerResponse> => {
  return await instance.get("/admin/banner", {
    params: { page, size },
  });
};

export const makeBannerServices = async (
  form: FormData,
): Promise<IAdminMakeBannerRes> => {
  return await instance.post("/admin/banner", form);
};
