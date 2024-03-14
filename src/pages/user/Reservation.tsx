import { useRef, useState } from "react";
import ItemGrid from "../../components/schedule/ItemGrid";
import * as S from "../../styles/Schedule.styles";
import { IItemList } from "../../types/UserReservation.types";
import { dragFn } from "../../utils/dragFn";
import { throttle } from "../../utils/throttle";
import Calendar from "../../components/schedule/Calendar";
import { TODAY } from "../../constants/Calendar.constants";
import Time from "../../components/schedule/Time";

export default function UserReservation() {
  const itemList: IItemList[] = [
    {
      id: "1",
      name: "개인 레슨 3개월",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "홍길동",
    },
    {
      id: "2",
      name: "개인 레슨 3개월",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "홍길동",
    },
    {
      id: "3",
      name: "헬스장 이용권",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "",
    },
    {
      id: "4",
      name: "헬스장 이용권",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "",
    },
    {
      id: "5",
      name: "개인 레슨 3개월",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "홍길동",
    },
    {
      id: "6",
      name: "개인 레슨 3개월",
      startDate: "2024.03.14",
      endDate: "2024.06.13",
      trainer: "홍길동",
    },
  ];

  const unavailableTimes = ["6:00", "14:00", "18:00"];

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const itemScrollRef = useRef<HTMLDivElement>(null);

  const dragFunction = dragFn(
    itemScrollRef,
    isDrag,
    setIsDrag,
    startX,
    setStartX,
  );

  const throttleDragMove = throttle(dragFunction.handleDragMove, 50);

  const handleClickItem = (id: string) => {
    setSelectedItem(id);
  };

  const handleClickDay = (day: Date) => {
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
        {itemList.map((item) => (
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
