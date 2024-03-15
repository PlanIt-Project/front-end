import { useState } from "react";
import { getMenuList } from "../../hooks/getMenuList";
import { useNavigate } from "react-router";
import * as S from "../../styles/menu/Menu.styles";


interface Ilogin {
  login: { user: string };
}

export default function AdminMenu({ login }: Ilogin) {
  const [onMenu, setonMenu] = useState<boolean>(false);
  const menuList = getMenuList(login);
  const navigate = useNavigate();

  const handleMoveToMenu = (path: string) => {
    navigate(path);
  };
  const handleMenu = () => {
    setonMenu(!onMenu);
  };
  return (
    <>
      <S.Content
        onClick={() => {
          handleMenu();
        }}
      >
        MENU
      </S.Content>
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
    </>
  );
}

