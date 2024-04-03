import {
  IAdminProgramResponse,
  IAdminProgramStatusResponse,
} from "../../../types/admin/Admin.program.types";
import { instance } from "../../instance";

export const getAdminProgramServices = async (
  page: number,
  size: number,
  option: string,
): Promise<IAdminProgramResponse> => {
  return await instance.get(`/admin/program`, {
    params: { option, size, page },
  });
};

export const getAdminChangeProgramStatusServices = async (
  programId: number,
  isSuspended: boolean,
): Promise<IAdminProgramStatusResponse> => {
  return await instance.put(
    `/admin/program/${programId}/${isSuspended ? "resume" : "suspend"}`,
  );
};
