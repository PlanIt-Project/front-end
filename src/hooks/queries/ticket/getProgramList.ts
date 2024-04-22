import { useQuery } from "@tanstack/react-query";
import { getProgramListService } from "../../../api/services/Ticket.services";
import { IProgramData } from "../../../types/ticket/ProgramList.types";

export const getProgramList = (option: "VALID" | "ALL") => {
  return useQuery<IProgramData, Error>({
    queryKey: ["getProgramList"],
    queryFn: async (): Promise<IProgramData> => {
      const response = await getProgramListService(option);

      if (response.code !== 200) {
        throw new Error("error");
      }

      return response.data;
    },
  });
};
