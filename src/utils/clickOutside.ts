import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

// NOTE selectBox, modal 등 컴포넌트 밖을 클릭했을 때 비활성화를 위한 util
export default function clickOutside(
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  ref: RefObject<HTMLDivElement>,
) {
  const handleClickOutside = (e: MouseEvent) => {
    if (isOpen && ref.current && !ref.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside as any);

  return () => {
    document.removeEventListener("click", handleClickOutside as any);
  };
}
