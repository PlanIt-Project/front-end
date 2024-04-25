import { useState } from "react";
import { getMenuList } from "../../hooks/getMenuList";
import { useNavigate } from "react-router";
import * as S from "../../styles/menu/Menu.styles";
import { useAuthStore } from "../../stores/authStore";

export default function AdminMenu() {
  const [onMenu, setonMenu] = useState<boolean>(false);
  const { user } = useAuthStore((state) => state);

  const menuList = getMenuList(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    useAuthStore.setState({
      accessToken: "",
      refreshToken: "",
      user: null,
    });
  };

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
            <S.AdminMenuContent onClick={handleLogout}>
              로그아웃
            </S.AdminMenuContent>
          </S.AdminMenuContainer>
        </S.Overlay>
      )}
    </>
  );
}
