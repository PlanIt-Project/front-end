import { Dispatch, SetStateAction } from "react";

export interface IProductModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  isModify: boolean;
}

export interface IAccountModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
}