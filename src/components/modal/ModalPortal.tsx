import { ReactNode } from "react";
import ReactDom from "react-dom";

interface IModalPortalProps {
  children: ReactNode;
}

export default function ModalPortal({ children }: IModalPortalProps) {
  const el = document.getElementById("modal");

  if (el) return ReactDom.createPortal(children, el);
  else {
    return <></>;
  }
}
