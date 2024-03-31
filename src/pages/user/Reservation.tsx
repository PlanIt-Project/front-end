import { useEffect, useRef, useState } from "react";
import ItemGrid from "../../components/schedule/ItemGrid";
import * as S from "../../styles/Schedule.styles";
import { dragFn } from "../../utils/dragFn";
import { throttle } from "../../utils/throttle";
import Calendar from "../../components/schedule/Calendar";
import { TODAY } from "../../constants/Calendar.constants";
import Time from "../../components/schedule/Time";
import { IProgramContent } from "../../types/ticket/ProgramList.types";
import { getProgramList } from "../../hooks/queries/ticket/getProgramList";
import { getTrainerReservation } from "../../hooks/queries/reservation/getTrainerReservation";
import { IFilteredTimeList } from "../../types/reservation/TrainerReservation.types";
import { filterTimesByStatus } from "../../utils/filterTimeByStatus";
import { registerUserReservation } from "../../hooks/queries/reservation/registerUserReservation";
import ToastNotification from "../../components/modal/ToastNotification";

export default function UserReservation() {
  const [programList, setProgramList] = useState<IProgramContent[]>([]);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [availableTimes, setAvailableTimes] = useState<IFilteredTimeList[]>([]);
  const [unavailableTimes, setUnavailableTimes] = useState<IFilteredTimeList[]>(
    [],
  );
  const [reservedTimes, setReservedTimes] = useState<IFilteredTimeList[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedProgramId, setSelectedProgramId] = useState<number>(-1);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const itemScrollRef = useRef<HTMLDivElement>(null);

  const { data: programListData } = getProgramList("VALID");
  const { data: trainerReservationData } = getTrainerReservation(
    selectedItem,
    selectedDay,
  );

  const { mutate: userReservationMutate } = registerUserReservation(
    selectedItem,
    selectedProgramId,
    setIsToastOpen,
  );

  // NOTE 프로그램 리스트
  useEffect(() => {
    if (programListData) setProgramList(programListData.content);
  }, [programListData]);

  // NOTE 트레이너 시간 리스트
  useEffect(() => {
    if (trainerReservationData) {
      const filteredData = trainerReservationData.data.map(
        ({ id, reservationTime, status }) => ({
          id,
          reservationTime,
          status,
        }),
      );
      const filteredAvailableTimes = filterTimesByStatus(
        filteredData,
        "POSSIBLE",
      );
      setAvailableTimes(filteredAvailableTimes);

      const filteredUnavailableTimes = filterTimesByStatus(
        filteredData,
        "FINISHED",
      );
      setUnavailableTimes(filteredUnavailableTimes);

      const filteredReservedTimes = filterTimesByStatus(
        filteredData,
        "RESERVED",
      );
      setReservedTimes(filteredReservedTimes);
    }
  }, [trainerReservationData]);

  const dragFunction = dragFn(
    itemScrollRef,
    isDrag,
    setIsDrag,
    startX,
    setStartX,
  );

  const throttleDragMove = throttle(dragFunction.handleDragMove, 50);

  const handleClickItem = (id: number) => {
    setSelectedItem(id);
  };

  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  const getTimeStatus = (time: string) => {
    if (unavailableTimes.some((t) => t.reservationTime === time)) {
      return "unavailable";
    }
    if (reservedTimes.some((t) => t.reservationTime === time)) {
      return "reserved";
    }
    return "available";
  };

  const handleClickTime = (time: string) => {
    setSelectedTime(time);

    const program = availableTimes.find((p) => p.reservationTime === time);

    if (program) {
      setSelectedProgramId(program.id);
    } else {
      setSelectedProgramId(-1);
    }
  };

  const handleRegister = () => {
    if (selectedProgramId !== -1) userReservationMutate();
  };

  return (
    <>
      <S.Container>
        <S.ItemContainer
          ref={itemScrollRef}
          onMouseDown={dragFunction.handleDragStart}
          onMouseMove={isDrag ? throttleDragMove : undefined}
          onMouseUp={dragFunction.handleDragEnd}
          onMouseLeave={dragFunction.handleDragEnd}
        >
          {programList.map((item) => (
            <ItemGrid
              key={item.id}
              item={item}
              isSelected={selectedItem === item.id}
              onClickItem={handleClickItem}
            />
          ))}
        </S.ItemContainer>
        <S.CalendarContainer>
          <Calendar selectedDay={selectedDay} handleClickDay={handleClickDay} />
        </S.CalendarContainer>
        <S.BottomContainer className="reservation">
          <Time
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            getTimeStatus={getTimeStatus}
            handleClickTime={handleClickTime}
          />
          <S.ReservationButton onClick={handleRegister}>
            예약하기
          </S.ReservationButton>
        </S.BottomContainer>
      </S.Container>
      {isToastOpen && (
        <ToastNotification
          contents="예약이 완료되었습니다."
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </>
  );
}
