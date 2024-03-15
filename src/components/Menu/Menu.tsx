import styled from "styled-components";
import { getMenuList } from "../../hooks/getMenuList";
import { breakPoints } from "../../styles/breakPoints";
import { useNavigate } from "react-router";

interface Ilogin {
  login: {user:string};
}


export default function Menu({login}:Ilogin) {
  const menuList = getMenuList(login);
  const navigate = useNavigate();
  const handleMoveToMenu = (path: string) => {
    navigate(path);
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
