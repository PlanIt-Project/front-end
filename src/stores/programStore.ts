import { create } from "zustand";

interface IProgramStore {
  option: string;
  setOption: (select: string) => void;
}

export const useProgramOptionStore = create<IProgramStore>((set) => ({
  option: "VALID",
  setOption: (select) => {
    set({ option: select });
  },
}));
