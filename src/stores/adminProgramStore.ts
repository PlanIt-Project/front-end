import { create } from "zustand";
import { IAdminProgramContent } from "../types/admin/Admin.program.types";

export interface IAdminProgramStore {
  programContent: IAdminProgramContent[];
  setProgramContent: (content: IAdminProgramContent[]) => void;
}

export const useAdminProgramStore = create<IAdminProgramStore>((set) => ({
  programContent: [],
  setProgramContent: (content) => {
    set({programContent:content});
  },
}));
