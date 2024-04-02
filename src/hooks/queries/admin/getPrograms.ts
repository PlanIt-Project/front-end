import { useQuery } from "@tanstack/react-query";
import { getAdminProgramServices } from "../../../api/services/admin/Program.services";
import { IAdminProgramData } from "../../../types/admin/Admin.program.types";

export const getAdminProgram = (option: string) => {
  return useQuery<IAdminProgramData, Error>({
    queryKey: ["getAdminProgram", option],
    queryFn: async (): Promise<IAdminProgramData> => {
      const response = await getAdminProgramServices(option);

      return response.data;
    },
  });
};
