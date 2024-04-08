import { create } from "zustand";
import { IAdminTrainerContent } from "../types/admin/Admin.trainer.types";

export interface IAdminTrainerStore {
  trainerContent: IAdminTrainerContent[];
  setTrainerContent: (content: IAdminTrainerContent[]) => void;
}

export interface IAdminTrainerDetailStore {
  trainerDetail: IAdminTrainerContent;
  setTrainerDetail: (detail: IAdminTrainerContent) => void;
}

export const useAdminTrainerStore = create<IAdminTrainerStore>((set) => ({
  trainerContent: [],
  setTrainerContent: (content) => {
    set({ trainerContent: content });
  },
}));

export const useAdminTrainerDetailStore = create<IAdminTrainerDetailStore>(
  (set) => ({
    trainerDetail: {
      address: "",
      birth: "",
      career: "",
      email: "",
      id: 0,
      name: "",
      phone_number: "",
      role: "MEMBER",
      trainerMessage: null,
    },
    setTrainerDetail: (detail) => {
      set({ trainerDetail: detail });
    },
  }),
);
