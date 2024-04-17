import { create } from "zustand";
import { IMyPageInfomationData } from "../types/myPage/MyPage.types";

export interface IMyPageToggle {
  toggle: boolean;
  setToggle: (state: boolean) => void;
}

export interface IMyPageInfomation {
  infomation: IMyPageInfomationData;
  setInfomation: (state: IMyPageInfomationData) => void;
}

export interface IMyPageTrigger {
  myPageTrigger: boolean;
  setMyPageTrigger: (trigger: boolean) => void;
}

export const useMyPageToggleStore = create<IMyPageToggle>((set) => ({
  toggle: true,
  setToggle: (toggle) => {
    set({ toggle });
  },
}));

export const useMyPageInfomationStore = create<IMyPageInfomation>((set) => ({
  infomation: {
    address: "",
    birth: "",
    email: "",
    gender: "MALE",
    id: 0,
    name: "",
    phone_number: "",
    role: "ADMIN",
  },
  setInfomation: (state) => {
    set({ infomation: state });
  },
}));

export const useMyPageTriggerStore = create<IMyPageTrigger>((set) => ({
  myPageTrigger: true,
  setMyPageTrigger: (trigger) => {
    set({ myPageTrigger: trigger });
  },
}));
