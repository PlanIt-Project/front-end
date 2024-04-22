import { useMutation } from "@tanstack/react-query";
import { IAdminProgramStatusResponse } from "../../../types/admin/Admin.program.types";
import {
   getAdminProgramChangeStatusServices,
} from "../../../api/services/admin/Program.services";

export const ProgramChangeStatus = (programId: number, isSuspended: boolean) => {
  return useMutation<IAdminProgramStatusResponse, Error>({
    mutationFn: async () => await getAdminProgramChangeStatusServices(programId, isSuspended),
  });
};


