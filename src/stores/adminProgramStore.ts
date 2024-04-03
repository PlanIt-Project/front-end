import { create } from "zustand";
import { IAdminProgramContent } from "../types/admin/Admin.program.types";

export interface IAdminProgramStore {
  programContent: IAdminProgramContent[];
  setProgramContent: (content: IAdminProgramContent[]) => void;
}

export interface IAdminProgramDetailStore {
  programDetail: IAdminProgramContent;
  setProgramDetail: (detail: IAdminProgramContent) => void;
}

export const useAdminProgramStore = create<IAdminProgramStore>((set) => ({
  programContent: [],
  setProgramContent: (content) => {
    set({ programContent: content });
  },
}));

export const useAdminProgramDetailStore = create<IAdminProgramDetailStore>(
  (set) => ({
    programDetail: {
      employee: {
        id: 0,
        name: "",
      },
      endAt: "",
      id: 0,
      member: {
        id: 0,
        name: "",
      },
      productName: "",
      remainedNumber: 0,
      resumeAt: "",
      startAt: "",
      status: "IN_PROGRESS",
      suspendAt: "",
      type: "PT",
    },
    setProgramDetail: (detail) => {
      set({ programDetail: detail });
    },
  }),
);
