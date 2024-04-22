import * as S from "../styles/Main.styles";
import { useEffect, useRef, useState } from "react";
import { setVH } from "../utils/setVH";
import { throttle } from "../utils/throttle";
import { dragFn } from "../utils/dragFn";
import { getBannerList } from "../hooks/queries/getBannerList";
import { getTrainerList } from "../hooks/queries/ticket/getTrainerList";
import { ITrainerContent } from "../types/ticket/TrainerList.types";
import LeftArrowIcon from "../assets/icon_left-arrow.png";
import RightArrowIcon from "../assets/icon_right-arrow.png";
import { IBannerListData } from "../types/BannerList.types";

export default function Main() {
  const api = process.env.REACT_APP_API_URL ?? "";

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [bannerList, setBannerList] = useState<IBannerListData[]>([]);
  const [trainerList, setTrainerList] = useState<ITrainerContent[]>([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const trainerScrollRef = useRef<HTMLDivElement>(null);

  const { data: bannerData } = getBannerList();
  const { data: trainerData } = getTrainerList();

  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  useEffect(() => {
    if (bannerData) setBannerList(bannerData);
  }, [bannerData]);

  useEffect(() => {
    if (trainerData) setTrainerList(trainerData?.content);
  }, [trainerData]);

  const dragFunction = dragFn(
    trainerScrollRef,
    isDrag,
    setIsDrag,
    startX,
    setStartX,
  );

  const throttleDragMove = throttle(dragFunction.handleDragMove, 50);

  const handleLeftArrowClick = () => {
    if (currentBannerIndex > 0) {
      setCurrentBannerIndex(currentBannerIndex - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentBannerIndex < bannerList.length - 1) {
      setCurrentBannerIndex(currentBannerIndex + 1);
    }
  };

  return (
    <S.Container>
      <S.BannerContainer>
        <S.BannerLeftArrow
          onClick={handleLeftArrowClick}
          $disabled={currentBannerIndex === 0}
        >
          <S.ArrowIcon src={LeftArrowIcon} />
        </S.BannerLeftArrow>
        {bannerList.map((el) => (
          <S.Banner
            key={el.id}
            src={`${api}${el.imagePath}`}
            $translateX={currentBannerIndex * 100}
          />
        ))}
        <S.BannerRightArrow
          onClick={handleRightArrowClick}
          $disabled={currentBannerIndex === bannerList.length - 1}
        >
          <S.ArrowIcon src={RightArrowIcon} />
        </S.BannerRightArrow>
      </S.BannerContainer>
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
