import { useState } from "react";
import TabMenu from "../../components/TabMenu";
import * as S from "../../styles/Ticket.styles";
import ModalPortal from "../../components/modal/ModalPortal";
import TicketRegisterModal from "../../components/modal/TicketRegisterModal";

export default function UserTicket() {
  const ticketList = [
    {
      id: 114,
      productName: "회원권 1달",
      remainedNumber: 0,
      startAt: "2024-03-18",
      endAt: "2024-04-17",
      suspendAt: null,
      resumeAt: null,
      status: "IN_PROGRESS",
      member: {
        id: 253,
        name: "member1",
      },
      employee: null,
    },
    {
      id: 115,
      productName: "회원권 1달",
      remainedNumber: 0,
      startAt: "2024-03-18",
      endAt: "2024-04-17",
      suspendAt: null,
      resumeAt: null,
      status: "IN_PROGRESS",
      member: {
        id: 253,
        name: "member1",
      },
      employee: null,
    },
    {
      id: 116,
      productName: "회원권 1달",
      remainedNumber: 0,
      startAt: "2024-03-18",
      endAt: "2024-04-17",
      suspendAt: null,
      resumeAt: null,
      status: "IN_PROGRESS",
      member: {
        id: 253,
        name: "member1",
      },
      employee: null,
    },
    {
      id: 117,
      productName: "회원권 1달",
      remainedNumber: 0,
      startAt: "2024-03-18",
      endAt: "2024-04-17",
      suspendAt: null,
      resumeAt: null,
      status: "IN_PROGRESS",
      member: {
        id: 253,
        name: "member1",
      },
      employee: null,
    },
  ];
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <S.Container>
      <S.TopContainer>
        <TabMenu />
        <S.RegisterButton onClick={handleOpenModal}>등록하기</S.RegisterButton>
      </S.TopContainer>
      <S.GridContainer>
        {ticketList.map((ticket) => (
          <S.Grid key={ticket.id}>
            <S.ProductName>{ticket.productName}</S.ProductName>
            <S.Date>{`${ticket.startAt} \u200B~\u200B ${ticket.endAt}`}</S.Date>
            <S.Date>
              <span className="strong">{ticket.remainedNumber} 일 남음</span>
              <span>/</span>
              <span>총 {ticket.suspendAt} 일</span>
            </S.Date>
          </S.Grid>
        ))}
      </S.GridContainer>

      {isRegisterModalOpen && (
        <ModalPortal>
          <TicketRegisterModal
            setIsRegisterModalOpen={setIsRegisterModalOpen}
          />
        </ModalPortal>
      )}
    </S.Container>
  );
}
