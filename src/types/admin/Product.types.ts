import { Dispatch, SetStateAction } from "react";

export interface IProductModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
}

export interface IProductDetail {
  setOnDetail:Dispatch<SetStateAction<boolean>>;
  id: number;
}

export interface IAccountModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
}