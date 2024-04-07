import { Dispatch, SetStateAction } from "react";

export interface IModal {
  setOnModal: Dispatch<SetStateAction<boolean>>;
  id?:number;
  status?:string;
}

export interface IDetail {
  setOnDetail:Dispatch<SetStateAction<boolean>>;
  id?: number;
}

