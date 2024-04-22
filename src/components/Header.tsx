import * as S from "../styles/Header.styles";
import Logo from "../assets/img_logo.png";
import AdminMenu from "./menu/AdminMenu";
import Menu from "./menu/Menu";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router";

export default function Header() {
  const { user } = useAuthStore((state) => state);

  const navigate = useNavigate();

  const handleMoveToMain = () => {
    navigate("/main");
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer onClick={handleMoveToMain}>
        <img src={Logo} alt="로고" />
      </S.LogoContainer>
      <S.MenuContainer>
        {user?.role !== "ADMIN" ? <Menu /> : <AdminMenu />}
      </S.MenuContainer>
    </S.HeaderContainer>
  );
}
