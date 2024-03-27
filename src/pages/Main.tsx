import * as S from "../styles/Main.styles";
import { useEffect, useRef, useState } from "react";
import { setVH } from "../utils/setVH";
import { throttle } from "../utils/throttle";
import { dragFn } from "../utils/dragFn";
import { getBannerList } from "../hooks/queries/getBannerList";
import { getTrainerList } from "../hooks/queries/ticket/getTrainerList";
import { ITrainerContent } from "../types/ticket/TrainerList.types";

export default function Main() {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [trainerList, setTrainerList] = useState<ITrainerContent[]>([]);

  const trainerScrollRef = useRef<HTMLDivElement>(null);

  const list = getBannerList();
  const { data } = getTrainerList();

  useEffect(() => {
    console.log("list", list);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  useEffect(() => {
    if (data) setTrainerList(data?.content);
  }, [data]);

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
              <S.ImageNameContainer>
                <S.ImageContainer>
                  {/* <img src={trainer.imgUrl} /> */}
                </S.ImageContainer>
                <S.Name>{trainer.name}</S.Name>
              </S.ImageNameContainer>
              <S.InfoContainer>{trainer.trainerMessage}</S.InfoContainer>
            </S.Grid>
          ))}
        </S.ContentsContainer>
      </S.TrainerContainer>
    </S.Container>
  );
}
