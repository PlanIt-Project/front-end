import { create } from "zustand";

export interface IMyPageToggle {
  toggle: boolean;
  setToggle: (state: boolean) => void;
}

export const useMyPageToggleStore = create<IMyPageToggle>(
  (set) => ({
    toggle: true,
    setToggle: (toggle) => {
      set({ toggle: toggle });
    },
  }),
);
