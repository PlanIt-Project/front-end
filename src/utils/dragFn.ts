import { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";

export const dragFn = (
  ref: RefObject<HTMLDivElement>,
  isDrag: boolean,
  setIsDrag: Dispatch<SetStateAction<boolean>>,
  startX: number,
  setStartX: Dispatch<SetStateAction<number>>,
) => {
  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (ref.current) {
      setIsDrag(true);
      setStartX(e.pageX + ref.current.scrollLeft);
    }
  };

  const handleDragEnd = () => {
    setIsDrag(false);
  };

  const handleDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDrag && ref.current) {
      const { scrollWidth, clientWidth, scrollLeft } = ref.current;

      ref.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  return { handleDragStart, handleDragEnd, handleDragMove };
};
