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

export default function UserReservation() {
  const unavailableTimes = ["6:00", "14:00", "18:00"];

  const [programList, setProgramList] = useState<IProgramContent[]>([]);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedItem, setSelectedItem] = useState<number | null>();
  const [selectedTime, setSelectedTime] = useState("");

  const itemScrollRef = useRef<HTMLDivElement>(null);

  const { data } = getProgramList("VALID");

  useEffect(() => {
    if (data) setProgramList(data.content);
  }, [data]);

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
    return !unavailableTimes.includes(time);
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
