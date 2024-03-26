import { IProgramList } from "../../types/ticket/ProgramList.types";
import { ITicketList } from "../../types/ticket/TicketList.types";
import { instance } from "../instance";

export const getTicketListService = async (): Promise<ITicketList> => {
  return await instance.get("/product");
};

export const getProgramListService = async (
  option: "VALID" | "ALL",
): Promise<IProgramList> => {
  return await instance.get("/program", {
    params: {
      option,
    },
  });
};
