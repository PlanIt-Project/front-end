import { create } from "zustand";
import { IAdminProductContent } from "../types/admin/Admin.product.types";

export interface IAdminProductStore {
  productContent: IAdminProductContent[];
  setProductContent: (content: IAdminProductContent[]) => void;
}

export interface IAdminProductDetailStore {
  productDetail: IAdminProductContent;
  setProductDetail: (detail: IAdminProductContent) => void;
}

export interface IAdminProductTrigger {
  productTrigger: boolean;
  setProductTrigger: (trigger: boolean) => void;
}

export const useAdminProductStore = create<IAdminProductStore>((set) => ({
  productContent: [],
  setProductContent: (content) => {
    set({ productContent: content });
  },
}));

export const useAdminProductDetailStore = create<IAdminProductDetailStore>(
  (set) => ({
    productDetail: {
      id: 0,
      name: "",
      number: 0,
      period: "",
      price: 0,
      sellingType: "",
      type: "PT",
    },
    setProductDetail: (detail) => {
      set({ productDetail: detail });
    },
  }),
);

export const useAdminProductTriggerStore = create<IAdminProductTrigger>(
  (set) => ({
    productTrigger: true,
    setProductTrigger: (trigger) => {
      set({ productTrigger: trigger });
    },
  }),
);
