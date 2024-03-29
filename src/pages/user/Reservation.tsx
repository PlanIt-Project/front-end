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

export default function UserReservation() {
  const [programList, setProgramList] = useState<IProgramContent[]>([]);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [unavailableTimes, setUnavailableTimes] = useState<IFilteredTimeList[]>(
    [],
  );
  const [reservedTimes, setReservedTimes] = useState<IFilteredTimeList[]>([]);
  const [selectedTime, setSelectedTime] = useState("");

  const itemScrollRef = useRef<HTMLDivElement>(null);

  const { data: programListData } = getProgramList("VALID");
  const { data: trainerReservationData } = getTrainerReservation(
    selectedItem,
    selectedDay,
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

      const filteredUnavailableTimes = filteredData
        .filter(({ status }) => status === "FINISHED")
        .map((data) => {
          const time = new Date(data.reservationTime).toLocaleTimeString(
            "en-GB",
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            },
          );

          return { id: data.id, reservationTime: time, status: data.status };
        });
      setUnavailableTimes(filteredUnavailableTimes);

      const filteredReservedTimes = filteredData
        .filter(({ status }) => status === "RESERVED")
        .map((data) => {
          const time = new Date(data.reservationTime).toLocaleTimeString(
            "en-GB",
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            },
          );
          return { id: data.id, reservationTime: time, status: data.status };
        });
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

  const isTimeAvailable = (time: string) => {
    // 예약 불가능한 시간들을 포함하는 배열에서 주어진 시간과 일치하는 항목을 찾는다
    const isUnavailable = unavailableTimes.some(
      (t) => t.reservationTime === time,
    );

    // 이미 예약된 시간들을 포함하는 배열에서 주어진 시간과 일치하는 항목을 찾는다
    const isReserved = reservedTimes.some((t) => t.reservationTime === time);

    // 주어진 시간이 unavailableTimes 또는 reservedTimes 배열에 없으면 해당 시간은 예약 가능
    return !isUnavailable && !isReserved;
  };

  const handleClickTime = (time: string) => {
    setSelectedTime(time);
  };

  return (
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
          isTimeAvailable={isTimeAvailable}
          handleClickTime={handleClickTime}
        />
        <S.ReservationButton>예약하기</S.ReservationButton>
      </S.BottomContainer>
    </S.Container>
  );
}
