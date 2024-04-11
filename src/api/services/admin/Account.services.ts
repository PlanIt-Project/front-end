import { IAdminAccountResponse } from "../../../types/admin/Admin.account.types";
import { instance } from "../../instance";

export const getAdminAccountServices = async (
  page: number,
  size: number,
): Promise<IAdminAccountResponse> => {
  return await instance.get("/admin/member", {
    params: { page, size },
  });
};
