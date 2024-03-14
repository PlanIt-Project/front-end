import * as S from "../styles/Main.styles";
import { useEffect, useRef, useState } from "react";
import { setVH } from "../utils/setVH";
import { throttle } from "../utils/throttle";
import { dragFn } from "../utils/dragFn";

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

  const dragFunction = dragFn(
    trainerScrollRef,
    isDrag,
    setIsDrag,
    startX,
    setStartX,
  );

  const throttleDragMove = throttle(dragFunction.handleDragMove, 50);

  return (
    <S.Container>
      <S.Banner></S.Banner>
      <S.TrainerContainer>
        <S.Title>트레이너 소개</S.Title>
        <S.ContentsContainer
          ref={trainerScrollRef}
          onMouseDown={dragFunction.handleDragStart}
          onMouseMove={isDrag ? throttleDragMove : undefined}
          onMouseUp={dragFunction.handleDragEnd}
          onMouseLeave={dragFunction.handleDragEnd}
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
