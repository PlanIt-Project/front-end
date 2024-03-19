import { MouseEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

export default function TabMenu() {
  const [currentTab, setCurrentTab] = useState("/trainer/reservation");

  const navigate = useNavigate();
  const location = useLocation();

  const handleTab = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setCurrentTab(target.value);

    if (location.pathname !== target.value) {
      navigate(target.value);
    }
  };

  return (
    <TabContainer>
      <TextTab
        $isCurrent={currentTab === "/trainer/reservation"}
        value="/trainer/reservation"
        onClick={handleTab}
      >
        예약관리
      </TextTab>
      <TextTab
        $isCurrent={currentTab === "/trainer/schedule"}
        value="/trainer/schedule"
        onClick={handleTab}
      >
        스케줄설정
      </TextTab>
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const TextTab = styled.button<{ $isCurrent: boolean }>`
  font-size: var(--font-size-300);
  font-weight: ${(props) => props.$isCurrent && "800"};
  color: ${(props) => props.$isCurrent && "var(--main-color-500)"};
`;
