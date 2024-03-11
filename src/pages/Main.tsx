import * as S from "../styles/Main.styles";
import { useEffect } from "react";
import { setVH } from "../utils/setVH";

export default function Main() {
  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  return (
    <S.Container>
      <S.Banner></S.Banner>
      <S.BottomContainer>
        <S.HalfContainer>
          <S.Title>이용 후기</S.Title>
          <S.ContentsContainer></S.ContentsContainer>
        </S.HalfContainer>
        <S.HalfContainer>
          <S.Title>이번주 예약 내역</S.Title>
          <S.ContentsContainer></S.ContentsContainer>
        </S.HalfContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
