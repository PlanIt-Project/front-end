import { useMutation } from "@tanstack/react-query";
import { IAdminProgramStatusResponse } from "../../../types/admin/Admin.program.types";
import {
  getAdminChangeProgramStatusServices,
} from "../../../api/services/admin/Program.services";

export const ProgramChangeStatus = (programId: number, isSuspended: boolean) => {
  return useMutation<IAdminProgramStatusResponse>({
    mutationFn: async () => await getAdminChangeProgramStatusServices(programId, isSuspended),
  });
};


