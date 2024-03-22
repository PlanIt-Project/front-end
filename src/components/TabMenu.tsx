import { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { breakPoints } from "../styles/breakPoints";

export default function TabMenu() {
  const trainerTabMenus = [
    { path: "/trainer/reservation", label: "예약관리" },
    { path: "/trainer/schedule", label: "스케줄설정" },
  ];
  const userTabMenus = [
    { path: "/user/ticket/available", label: "사용가능" },
    { path: "/user/ticket/expired", label: "만료" },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(location.pathname);
  const [trainerLogin] = useState(false);

  useEffect(() => {
    setCurrentTab(location.pathname);
  }, [location.pathname]);

  const handleTab = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const newPath = target.value;

    if (location.pathname !== newPath) {
      navigate(newPath);
    }
  };

  const menus = trainerLogin ? trainerTabMenus : userTabMenus;

  return (
    <TabContainer>
      {menus.map((menu) => (
        <TextTab
          key={menu.label}
          $isCurrent={currentTab === menu.path}
          value={menu.path}
          onClick={handleTab}
        >
          {menu.label}
        </TextTab>
      ))}
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: ${breakPoints.small}px) {
    gap: 30px;
  }
`;

const TextTab = styled.button<{ $isCurrent: boolean }>`
  font-size: var(--font-size-300);
  font-weight: ${(props) => props.$isCurrent && "800"};
  color: ${(props) => props.$isCurrent && "var(--main-color-500)"};

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-400);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;
