import { IAdminRequestApproveResponse, IAdminRequestResponse } from "../../../types/admin/Admin.Request.types";
import { instance } from "../../instance";

export const getAdminRequestServices = async (
    page: number,
    size: number,
    option: string,
  ): Promise<IAdminRequestResponse>  => {
    return await instance.get(`/admin/program/registration`, {
      params: { option, size, page },
    });
  };

export const requestApproveServices = async (
  registrationId: number,
  trainerId:number,
): Promise<IAdminRequestApproveResponse> => {
  return await instance.post(`/admin/program/approve/${registrationId}`, {
    trainerId 
  })
}
