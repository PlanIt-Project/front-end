import { Dispatch, RefObject, SetStateAction } from "react";

export interface IOptionList {
  label: string;
  value: string;
}

export interface ICommonSelectBoxProps {
  selectBoxRef: RefObject<HTMLDivElement>;
  isSelectBoxOpen: boolean;
  setIsSelectBoxOpen: Dispatch<SetStateAction<boolean>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  optionList: any[];
  width?: number;
  height?: number;
}
