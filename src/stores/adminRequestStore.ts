import { create } from "zustand";
import { IAdminRequestContent } from "../types/admin/Admin.Request.types";

export interface IAdminRequestStore {
  requestContent: IAdminRequestContent[];
  setRequestContent: (content: IAdminRequestContent[]) => void;
}

export interface IAdminRequestDetailStore {
  requestDetail: IAdminRequestContent;
  setRequestDetail: (detail: IAdminRequestContent) => void;
}

export interface IAdminRequestTrigger {
  requestTrigger: boolean;
  setRequestTrigger: (trigger: boolean) => void;
}

export const useAdminRequestStore = create<IAdminRequestStore>((set) => ({
  requestContent: [],
  setRequestContent: (content) => {
    set({ requestContent: content });
  },
}));

export const useAdminRequestDetailStore = create<IAdminRequestDetailStore>(
  (set) => ({
    requestDetail: {
      discount: 0,
      id: 0,
      member: {
        id: 0,
        name: "",
      },
      product: {
        id: 0,
        name: "",
        number: 0,
        period: "",
        price: 0,
        sellingType: "",
        type: "PT",
      },
      refundAt: "",
      registrationAt: "",
      status: "",
      totalPrice: "",
      trainer: {
        id: 0,
        name: "",
      },
      trainerId: 0
    },
    setRequestDetail: (detail) => {
      set({ requestDetail: detail });
    },
  }),
);

export const useAdminRequestTriggerStore = create<IAdminRequestTrigger>(
  (set) => ({
    requestTrigger: true,
    setRequestTrigger: (trigger) => {
      set({ requestTrigger: trigger });
    },
  }),
);
