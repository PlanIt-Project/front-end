import { useEffect } from "react";
import * as S from "../styles/Landing.styles";
import { setVH } from "../utils/setVH";
import Kettlebell from "../assets/img_kettlebell.png";
import Dumbell from "../assets/img_dumbell.png";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function Landing() {
  const { user } = useAuthStore((state) => state);

  useEffect(() => {
    window.addEventListener("resize", setVH);
    setVH();
  }, []);

  const navigate = useNavigate();

  const handleGetStart = () => {
    user?.role ? navigate("/main") : navigate("/login");
  };

  return (
    <S.Container>
      <S.TitleButtonContainer>
        <S.Title>
          <p>PT의 모든 것</p>
          <p>PlanIT에서 쉽고 간편하게</p>
        </S.Title>
        <S.StartButton onClick={handleGetStart}>Get Start</S.StartButton>
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
