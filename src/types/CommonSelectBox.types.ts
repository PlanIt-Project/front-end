import { Dispatch, RefObject, SetStateAction } from "react";

export interface IOptionList {
  label: string;
  value: string;
}

export interface ICommonSelectBoxProps {
  selectBoxRef: RefObject<HTMLDivElement>;
  isSelectBoxOpen: boolean;
  setIsSelectBoxOpen: Dispatch<SetStateAction<boolean>>;
  selectedOption: number;
  setSelectedOption: Dispatch<SetStateAction<number>>;
  optionList: any[];
  width?: number;
  height?: number;
}
