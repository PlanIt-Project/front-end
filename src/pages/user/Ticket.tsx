import { useEffect, useState } from "react";
import TabMenu from "../../components/TabMenu";
import * as S from "../../styles/Ticket.styles";
import ModalPortal from "../../components/modal/ModalPortal";
import TicketRegisterModal from "../../components/modal/TicketRegisterModal";
import { getProgramList } from "../../hooks/queries/ticket/getProgramList";
import { IProgramContent } from "../../types/ticket/ProgramList.types";
import { useLocation } from "react-router";
import ToastNotification from "../../components/modal/ToastNotification";

export default function UserTicket() {
  const [ticketList, setTicketList] = useState<IProgramContent[]>([]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [programOption, setProgramOption] = useState<"VALID" | "ALL">("VALID");
  const [isToastOpen, setIsToastOpen] = useState(false);

  const location = useLocation();

  const { data } = getProgramList(programOption);

  useEffect(() => {
    location.pathname.includes("available")
      ? setProgramOption("VALID")
      : setProgramOption("ALL");
  }, [location]);

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
            <S.ProductName>{ticket.productName}</S.ProductName>
            <S.Date>{`${ticket.startAt} \u200B~\u200B ${ticket.endAt === null ? "" : ticket.endAt}`}</S.Date>
            <S.Date>
              <span>총 {ticket.remainedNumber} 회 남음</span>
            </S.Date>
          </S.Grid>
        ))}
      </S.GridContainer>

      {isRegisterModalOpen && (
        <ModalPortal>
          <TicketRegisterModal
            setIsRegisterModalOpen={setIsRegisterModalOpen}
            setIsToastOpen={setIsToastOpen}
          />
        </ModalPortal>
      )}
      {isToastOpen && (
        <ToastNotification
          contents="등록 요청이 완료되었습니다."
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </S.Container>
  );
}
