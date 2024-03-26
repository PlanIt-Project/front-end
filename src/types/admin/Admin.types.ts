import { Dispatch, SetStateAction } from "react";

export interface IModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
}

export interface IDetail {
  setOnDetail:Dispatch<SetStateAction<boolean>>;
  id: number;
}

