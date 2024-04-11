import { IAdminAccountResponse, IAdminAccountTransformRes } from "../../../types/admin/Admin.account.types";
import { instance } from "../../instance";

export const getAdminAccountServices = async (
  page: number,
  size: number,
): Promise<IAdminAccountResponse> => {
  return await instance.get("/admin/member", {
    params: { page, size },
  });
};

export const transformToTrainerServices = async (
  memberId: number,
  career: string,
  trainerMessage: string,
): Promise<IAdminAccountTransformRes> => {
  return await instance.put(`/admin/member/employee/${memberId}`, {
    career,
    trainerMessage,
  });
};
