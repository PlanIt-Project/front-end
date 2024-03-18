import { getMenuList } from "../../hooks/getMenuList";
import { useNavigate } from "react-router";
import { useState } from "react";
import * as S from "../../styles/menu/Menu.styles";

interface Ilogin {
  login: { user: string };
}

export default function Menu({ login }: Ilogin) {
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
      <S.Profile
        onClick={() => {
          handleMenu();
        }}
      />
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
              <S.Button>수정하기</S.Button>
              <S.Button>로그아웃</S.Button>
            </S.ProfileButtons>
          </S.ProfileMenu>
        </S.Overlay>
      )}
    </>
  );
}
