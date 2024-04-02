import { IAdminProgramResponse, IAdminProgramStatusResponse } from "../../../types/admin/Admin.program.types";
import { instance } from "../../instance";

export const getAdminProgramServices = async (
  option: string,
): Promise<IAdminProgramResponse> => {
  return await instance.get(`/admin/program`, {
    params: { option },
  });
};

export const getAdminChangeProgramStatusServices = async (
  programId: number,
  isSuspended: boolean
) : Promise<IAdminProgramStatusResponse> => {
  return await instance.put(`/admin/program/${programId}/${isSuspended ? "resume" : "suspend"}`);
};

