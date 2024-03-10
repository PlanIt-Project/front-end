import * as S from "../styles/Header.styles";
import Logo from "../assets/img_logo.png";
import { getMenuList } from "../hooks/getMenuList";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const [login] = useState({ user: "user" });

  const menuList = getMenuList(login);
  const navigate = useNavigate();

  const handleMoveToMenu = (path: string) => {
    navigate(path);
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={Logo} alt="로고" />
      </S.LogoContainer>
      <S.MenuContainer>
        {menuList.map((menu: any, index: number) => (
          <S.Menu
            key={index}
            onClick={() => {
              handleMoveToMenu(menu.path);
            }}
          >
            {menu.label}
          </S.Menu>
        ))}
      </S.MenuContainer>
    </S.HeaderContainer>
  );
}
