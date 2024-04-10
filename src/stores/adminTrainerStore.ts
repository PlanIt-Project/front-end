import { create } from "zustand";
import { IAdminTrainerContent, IAdminTrainerScheduleData } from "../types/admin/Admin.trainer.types";

export interface IAdminTrainerStore {
  trainerContent: IAdminTrainerContent[];
  setTrainerContent: (content: IAdminTrainerContent[]) => void;
}

export interface IAdminTrainerDetailStore {
  trainerDetail: IAdminTrainerContent;
  setTrainerDetail: (detail: IAdminTrainerContent) => void;
}

export interface IAdminTrainerScheduleStore {
  trainerSchedule: IAdminTrainerScheduleData[];
  setTrainerSchedule: (schedule: IAdminTrainerScheduleData[]) => void;
}

export interface IAdminTrainerTrigger {
  trainerTrigger: boolean;
  setTrainerTrigger: (trigger: boolean) => void;
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

export const useAdminTrainerScheduleStore = create<IAdminTrainerScheduleStore>(
  (set) => ({
    trainerSchedule: [],
    setTrainerSchedule: (schedule) => {
      set({trainerSchedule: schedule})
    }
  })
)

export const useAdminTrainerTriggerStore = create<IAdminTrainerTrigger>(
  (set) => ({
    trainerTrigger: true,
    setTrainerTrigger: (trigger) => {
      set({ trainerTrigger: trigger });
    },
  }),
);
