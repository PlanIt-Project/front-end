import { Dispatch, SetStateAction } from "react";

export interface IConfirmModalProps {
  contents: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  cancelFn: () => void;
}
