import { useQuery } from "@tanstack/react-query";
import { getTrainerListService } from "../../../api/services/Ticket.services";
import { ITrainerData } from "../../../types/ticket/TrainerList.types";

export const getTrainerList = () => {
  return useQuery<ITrainerData, Error>({
    queryKey: ["getTrainerList"],
    queryFn: async (): Promise<ITrainerData> => {
      const response = await getTrainerListService();

      if (response.code !== 200) {
        throw new Error("error");
      }

      return response.data;
    },
  });
};
