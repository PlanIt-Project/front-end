import styled from "styled-components";
import { getMenuList } from "../../hooks/getMenuList";
import { breakPoints } from "../../styles/breakPoints";
import { useNavigate } from "react-router";
import { useState } from "react";
import { CommonButton } from "../../styles/globalStyles";

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
        <Content
          key={index}
          onClick={() => {
            handleMoveToMenu(menu.path);
          }}
        >
          {menu.label}
        </Content>
      ))}
      <Profile
        onClick={() => {
          handleMenu();
        }}
      />
      {onMenu && (
        <Overlay
          onClick={() => {
            handleMenu();
          }}
        >
          <ProfileMenu>
            <Infomation>abc@abc.com</Infomation>
            <Infomation>홍길동</Infomation>
            <ProfileButtons>
              <Button>수정하기</Button>
              <Button>로그아웃</Button>
            </ProfileButtons>
          </ProfileMenu>
        </Overlay>
      )}
    </>
  );
}

export const Content = styled.button`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`;

export const Profile = styled.button`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  background-color: var(--white-color-500);
  border-radius: 100%;
  &:hover {
    box-shadow: 0 0 11px rgba(102, 102, 102, 0.25);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  width: 320px;
  height: 150px;
  background-color: var(--main-color-300);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  padding-top: 2%;
`;

export const Infomation = styled.div`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`


export const ProfileButtons = styled.div`
  display: flex;
  gap: 20px;
`
export const Button = styled(CommonButton)`
  background-color: var(--main-color-400);
  width: 80px;
  height: 30px;
  font-size: var(--font-size-500);
  &:hover {
    background-color: var(--main-color-500);
  }
`



