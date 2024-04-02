import { useQuery } from "@tanstack/react-query";
import { getAdminProgramServices } from "../../../api/services/admin/Program.services";
import { IAdminProgramContent } from "../../../types/admin/Admin.program.types";

export const getAdminProgram = (option: string) => {
  return useQuery<IAdminProgramContent[], Error>({
    queryKey: ["getAdminProgram", option],
    queryFn: async (): Promise<IAdminProgramContent[]> => {
      const response = await getAdminProgramServices(option);

      return response.data.content;
    },
  });
};
