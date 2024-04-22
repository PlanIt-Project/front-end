import { IRegisterProgramResponse } from "../../hooks/queries/ticket/registerProgram";
import { IProgramList } from "../../types/ticket/ProgramList.types";
import { ITicketList } from "../../types/ticket/TicketList.types";
import { ITrainerList } from "../../types/ticket/TrainerList.types";
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

export const getTrainerListService = async (): Promise<ITrainerList> => {
  return await instance.get("/member/employee");
};

export const registerProgramService = async (
  productId: number,
  trainerId: number | null,
  registrationAt: string,
): Promise<IRegisterProgramResponse> => {
  return await instance.post("/program/registration", {
    productId,
    trainerId: trainerId === -1 ? null : trainerId,
    registrationAt,
  });
};
