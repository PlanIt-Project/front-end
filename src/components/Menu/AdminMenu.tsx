import styled from "styled-components";
import { breakPoints } from "../../styles/breakPoints";
import { useState } from "react";
import { getMenuList } from "../../hooks/getMenuList";
import { useNavigate } from "react-router";

interface Ilogin {
  login: {user:string};
}

export default function AdminMenu({login}:Ilogin) {
    const [onMenu, setonMenu] = useState<boolean>(false);
    const menuList = getMenuList(login);
    const navigate = useNavigate();
    
    const handleMoveToMenu = (path: string) => {
        navigate(path);
      };
    const handleMenu = () => {
        setonMenu(!onMenu);
      };
    return <>
        <Menu
            onClick={() => {
              handleMenu();
            }}
          >
            MENU
          </Menu>
          {onMenu && (
          <Overlay
            onClick={() => {
              handleMenu();
            }}
          >
            <AdminMenuContainer>
              <AdminMenuTitle>MENU</AdminMenuTitle>
              {menuList.map((menu: any, index: number) => (
                <AdminMenuContent
                  key={index}
                  onClick={() => {
                    handleMoveToMenu(menu.path);
                  }}
                >
                  {menu.label}
                </AdminMenuContent>
              ))}
            </AdminMenuContainer>
          </Overlay>
        )}
    </>
}

export const Menu = styled.button`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const AdminMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 500px;
  border-bottom-left-radius: 20px;
  background-color: var(--main-color-300);
  box-shadow: 4px 3px 4px rgba(0,0,0,0.30);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  
  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
  }
`

export const AdminMenuTitle = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`

export const AdminMenuContent = styled.div`
  font-size: var(--font-size-400);

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`