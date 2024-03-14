import * as S from "../styles/Header.styles";
import Logo from "../assets/img_logo.png";
import { getMenuList } from "../hooks/getMenuList";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const [login, setLogin] = useState({ user: "user" });
  const [onMenu, setonMenu] = useState<boolean>(false);

  const menuList = getMenuList(login);
  const navigate = useNavigate();
  const locationObject = useLocation();

  const handleMoveToMenu = (path: string) => {
    navigate(path);
  };

  const handleMenu = () => {
    setonMenu(!onMenu);
  };

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
          menuList.map((menu: any, index: number) => (
            <S.Menu
              key={index}
              onClick={() => {
                handleMoveToMenu(menu.path);
              }}
            >
              {menu.label}
            </S.Menu>
          ))
        ) : (
          <S.Menu
            onClick={() => {
              handleMenu();
            }}
          >
            MENU
          </S.Menu>
        )}
        {onMenu && (
          <S.Overlay
            onClick={() => {
              handleMenu();
            }}
          >
            <S.AdminMenuContainer>
              <S.AdminMenuTitle>MENU</S.AdminMenuTitle>
              {menuList.map((menu: any, index: number) => (
                <S.AdminMenuContent
                  key={index}
                  onClick={() => {
                    handleMoveToMenu(menu.path);
                  }}
                >
                  {menu.label}
                </S.AdminMenuContent>
              ))}
            </S.AdminMenuContainer>
          </S.Overlay>
        )}
      </S.MenuContainer>
    </S.HeaderContainer>
  );
}
