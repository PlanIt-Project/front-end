import { getMenuList } from "../../hooks/getMenuList";
import { useNavigate } from "react-router";
import { useState } from "react";
import * as S from "../../styles/menu/Menu.styles";
import { useAuthStore } from "../../stores/authStore";

export default function Menu() {
  const [onMenu, setonMenu] = useState<boolean>(false);
  const { user } = useAuthStore((state) => state);

  const menuList = getMenuList(user);
  const navigate = useNavigate();

  const handleMoveToMenu = (path: string) => {
    navigate(path);
  };

  const handleMenu = () => {
    setonMenu(!onMenu);
  };

  const onClickMyPage = () => {
    navigate("/myPage")
  }

  const handleLogout = () => {
    useAuthStore.setState({
      accessToken: "",
      refreshToken: "",
      user: null,
    });
  };

  return (
    <>
      {menuList.map((menu: any, index: number) => (
        <S.Content
          key={index}
          onClick={() => {
            handleMoveToMenu(menu.path);
          }}
        >
          {menu.label}
        </S.Content>
      ))}
      {user && (
        <S.Profile
          onClick={() => {
            handleMenu();
          }}
        />
      )}
      {onMenu && (
        <S.Overlay
          onClick={() => {
            handleMenu();
          }}
        >
          <S.ProfileMenu>
            <S.Infomation>abc@abc.com</S.Infomation>
            <S.Infomation>홍길동</S.Infomation>
            <S.ProfileButtons>
              <S.Button onClick={onClickMyPage}>내 정보</S.Button>
              <S.Button onClick={handleLogout}>로그아웃</S.Button>
            </S.ProfileButtons>
          </S.ProfileMenu>
        </S.Overlay>
      )}
    </>
  );
}
