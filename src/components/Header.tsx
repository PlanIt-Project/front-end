import * as S from "../styles/Header.styles";
import Logo from "../assets/img_logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AdminMenu from "./menu/AdminMenu";
import Menu from "./menu/Menu";

export default function Header() {
  const [login, setLogin] = useState({ user: "user" });
  const locationObject = useLocation();

  // 로그인 구현 전에 임시로 만든 코드입니다.
  useEffect(() => {
    if (locationObject.pathname.includes("admin")) {
      setLogin({ user: "admin" });
    }
  }, []);
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={Logo} alt="로고" />
      </S.LogoContainer>
      <S.MenuContainer>
        {login.user !== "admin" ? (
          <Menu login={login}/>
        ) : (
          <AdminMenu login={login}/>
        )}
      </S.MenuContainer>
    </S.HeaderContainer>
  );
}
