import { create } from "zustand";
import { IAdminAccountContent } from "../types/admin/Admin.account.types";

export interface IAdminAccountStore {
  accountContent: IAdminAccountContent[];
  setAccountContent: (content: IAdminAccountContent[]) => void;
}

export interface IAdminAccountDetailStore {
  accountDetail: IAdminAccountContent;
  setAccountDetail: (detail: IAdminAccountContent) => void;
}

export interface IAdminAccountTrigger {
  accountTrigger: boolean;
  setAccountTrigger: (trigger: boolean) => void;
}

export const useAdminAccountStore = create<IAdminAccountStore>((set) => ({
  accountContent: [],
  setAccountContent: (content) => {
    set({ accountContent: content });
  },
}));

export const useAdminAccountDetailStore = create<IAdminAccountDetailStore>(
  (set) => ({
    accountDetail: {
      address: "",
      birth: "",
      email: "",
      gender: "MALE",
      id: 0,
      name: "",
      phone_number: "",
      role: "MEMBER",
      trainerInfo: null,
    },
    setAccountDetail: (detail) => {
      set({ accountDetail: detail });
    },
  }),
);

export const useAdminAccountTriggerStore = create<IAdminAccountTrigger>(
  (set) => ({
    accountTrigger: true,
    setAccountTrigger: (trigger) => {
      set({ accountTrigger: trigger });
    },
  }),
);
