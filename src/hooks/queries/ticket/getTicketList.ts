import { useQuery } from "@tanstack/react-query";
import { getTicketListService } from "../../../api/services/Ticket.services";
import { ITicketData } from "../../../types/ticket/TicketList.types";

export const getTicketList = () => {
  return useQuery<ITicketData, Error>({
    queryKey: ["getTicketList"],
    queryFn: async (): Promise<ITicketData> => {
      const response = await getTicketListService();

      if (response.code !== 200) {
        throw new Error("error");
      }

      return response.data;
    },
  });
};
