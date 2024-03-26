import { ITicketList } from "../../types/TicketList.types";
import { instance } from "../instance";

export const getTicketListService = async (): Promise<ITicketList> => {
  return await instance.get("/product");
};
