import * as S from "../styles/Header.styles";
import Logo from "../assets/img_logo.png";
import AdminMenu from "./menu/AdminMenu";
import Menu from "./menu/Menu";
import { useAuthStore } from "../stores/authStore";

export default function Header() {
  const { user } = useAuthStore((state) => state);

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={Logo} alt="로고" />
      </S.LogoContainer>
      <S.MenuContainer>
        {user?.role !== "ADMIN" ? <Menu /> : <AdminMenu />}
      </S.MenuContainer>
    </S.HeaderContainer>
  );
}
