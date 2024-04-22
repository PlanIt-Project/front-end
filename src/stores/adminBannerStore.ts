import { create } from "zustand";
import { IAdminBannerContent } from "../types/admin/Admin.banner.types";

export interface IAdminBannerStore {
    bannerContent: IAdminBannerContent[];
    setBannerContent: (content: IAdminBannerContent[]) => void;
  }
  
  export interface IAdminBannerDetailStore {
    bannerDetail: IAdminBannerContent;
    setBannerDetail: (detail: IAdminBannerContent) => void;
  }
  
  export interface IAdminBannerTrigger {
    bannerTrigger: boolean;
    setBannerTrigger: (trigger: boolean) => void;
  }
  
  export const useAdminBannerStore = create<IAdminBannerStore>((set) => ({
    bannerContent: [],
    setBannerContent: (content) => {
      set({ bannerContent: content });
    },
  }));
  
  export const useAdminBannerDetailStore = create<IAdminBannerDetailStore>(
    (set) => ({
      bannerDetail: {
          endAt: "",
          id: 0,
          imagePath: "",
          startAt: "",
          title: ""
      },
      setBannerDetail: (detail) => {
        set({ bannerDetail: detail });
      },
    }),
  );
  
  export const useAdminBannerTriggerStore = create<IAdminBannerTrigger>(
    (set) => ({
      bannerTrigger: true,
      setBannerTrigger: (trigger) => {
        set({ bannerTrigger: trigger });
      },
    }),
  );
  