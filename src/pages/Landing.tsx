import { useEffect } from "react";
import * as S from "../styles/Landing.styles";
import { setVH } from "../utils/setVH";
import Kettlebell from "../assets/img_kettlebell.png";
import Dumbell from "../assets/img_dumbell.png";
import { useNavigate } from "react-router";

export default function Landing() {
  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  const navigate = useNavigate();

  const handleMoveToLogin = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <S.TitleButtonContainer>
        <S.Title>
          <p>언제 어디서나</p>
          <p>이용권 스케줄 관리를!</p>
        </S.Title>
        <S.StartButton onClick={handleMoveToLogin}>Get Start</S.StartButton>
      </S.TitleButtonContainer>
      <S.KettlebellContainer>
        <img src={Kettlebell} alt="kettlebell" />
      </S.KettlebellContainer>
      <S.DumbellContainer>
        <img src={Dumbell} alt="dumbell" />
      </S.DumbellContainer>
    </S.Container>
  );
}
