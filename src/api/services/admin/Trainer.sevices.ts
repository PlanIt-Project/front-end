import { IAdminTrainerResponse } from "../../../types/admin/Admin.trainer.types";
import { instance } from "../../instance";

export const getAdminTrainerServices = async (
  page: number,
  size: number,
): Promise<IAdminTrainerResponse> => {
  return await instance.get("/member/employee", {
    params: { page, size },
  });
};
