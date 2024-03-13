import * as S from "../styles/Main.styles";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { setVH } from "../utils/setVH";
import { throttle } from "../utils/throttle";

export default function Main() {
  const trainerList = [
    { id: "1", imgUrl: "", info: "설명" },
    { id: "2", imgUrl: "", info: "설명" },
    { id: "3", imgUrl: "", info: "" },
    { id: "4", imgUrl: "", info: "" },
    { id: "5", imgUrl: "", info: "" },
    { id: "6", imgUrl: "", info: "" },
    { id: "7", imgUrl: "", info: "" },
  ];

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const trainerScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (trainerScrollRef.current) {
      setIsDrag(true);
      setStartX(e.pageX + trainerScrollRef.current.scrollLeft);
    }
  };

  const handleDragEnd = () => {
    setIsDrag(false);
  };

  const handleDragMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDrag && trainerScrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = trainerScrollRef.current;

      trainerScrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const throttleDragMove = throttle(handleDragMove, 50);

  return (
    <S.Container>
      <S.Banner></S.Banner>
      <S.TrainerContainer>
        <S.Title>트레이너 소개</S.Title>
        <S.ContentsContainer
          ref={trainerScrollRef}
          onMouseDown={handleDragStart}
          onMouseMove={isDrag ? throttleDragMove : undefined}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {trainerList.map((trainer) => (
            <S.Grid key={trainer.id}>
              <S.ImageContainer>
                <img src={trainer.imgUrl} />
              </S.ImageContainer>
              <S.InfoContainer>{trainer.info}</S.InfoContainer>
            </S.Grid>
          ))}
        </S.ContentsContainer>
      </S.TrainerContainer>
    </S.Container>
  );
}
