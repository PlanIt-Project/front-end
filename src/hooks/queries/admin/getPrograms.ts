import { useQuery } from "@tanstack/react-query";
import { getAdminProgramServices } from "../../../api/services/admin/Program.services";
import { IAdminProgramData } from "../../../types/admin/Admin.program.types";

export const getAdminProgram = (page: number, size: number, option: string) => {
  return useQuery<IAdminProgramData, Error>({
    queryKey: ["getAdminProgram", option, page],
    queryFn: async (): Promise<IAdminProgramData> => {
      const response = await getAdminProgramServices(page, size, option);

      return response.data;
    },
  });
};
