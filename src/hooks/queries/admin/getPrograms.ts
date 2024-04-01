import { useQuery } from "@tanstack/react-query";
import { getAdminProgramServices } from "../../../api/services/admin/Program.services";
import { IAdminProgramResponse } from "../../../types/admin/Admin.program.types";


export const getAdminProgram = (option:string) => {
    return useQuery<IAdminProgramResponse>({
      queryKey: ["getAdminProgram", option],
      queryFn: async ():Promise<IAdminProgramResponse> => {
        const response = await getAdminProgramServices(option);
  
        return response;
      }
    });
  };