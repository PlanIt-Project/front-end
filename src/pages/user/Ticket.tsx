import { useEffect, useState } from "react";
import TabMenu from "../../components/TabMenu";
import * as S from "../../styles/Ticket.styles";
import ModalPortal from "../../components/modal/ModalPortal";
import TicketRegisterModal from "../../components/modal/TicketRegisterModal";
import { getTicketList } from "../../hooks/queries/getTicketList";
import { ITicketContent } from "../../types/TicketList.types";

export default function UserTicket() {
  const [ticketList, setTicketList] = useState<ITicketContent[]>([]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const { data } = getTicketList();

  useEffect(() => {
    if (data) setTicketList(data.content);
  }, [data]);

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
            <S.ProductType>{ticket.type}</S.ProductType>
            <S.ProductName>{ticket.name}</S.ProductName>
            {/* <S.Date>{`${ticket.startAt} \u200B~\u200B ${ticket.endAt}`}</S.Date> */}
            <S.Date>
              <span className="strong">{ticket.number} 일 남음</span>
              <span>/</span>
              <span>총 {ticket.number} 일</span>
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
