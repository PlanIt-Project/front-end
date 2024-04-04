import { useEffect, useState } from "react";
import TabMenu from "../../components/TabMenu";
import Calendar from "../../components/schedule/Calendar";
import * as S from "../../styles/Schedule.styles";
import { TODAY } from "../../constants/Calendar.constants";
import Time from "../../components/schedule/Time";
import { registerTrainerSchedule } from "../../hooks/queries/reservation/registerTrainerSchedule";
import ToastNotification from "../../components/modal/ToastNotification";
import { getUserSchedule } from "../../hooks/queries/reservation/getUserSchedule";
import dayjs from "dayjs";
import { OPEN_TIME } from "../../constants/OpenTime.constants";
import { getTrainerWorkSchedule } from "../../hooks/queries/reservation/getTrainerWorkSchedule";
import { getTrainerWorkTimes } from "../../utils/getTrainerWorkTimes";

export default function TrainerSchedule() {
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<
    Array<{ time: string; status: string }>
  >([]);
  const [unavailableTimes, setUnavailableTimes] = useState<string[]>([]);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const { data: trainerScheduleData = {} } = getUserSchedule(selectedDay);
  const { data: trainerWorkScheduleData } = getTrainerWorkSchedule(selectedDay);
  const { mutate: registerScheduleMutate } = registerTrainerSchedule(
    selectedDay,
    selectedTimes,
    setIsToastOpen,
  );

  // NOTE 전체 시간 불러와서, unavailable(출퇴근시간) set하기
  useEffect(() => {
    const allTimes = [
      ...OPEN_TIME().dawnTimes,
      ...OPEN_TIME().morningTimes,
      ...OPEN_TIME().afternoonTimes,
      ...OPEN_TIME().nightTimes,
    ].map((time) => ({
      time,
      status: "OPEN",
    }));

    const timesWithUpdatedStatus = allTimes.map((timeSlot) => {
      const scheduleStatus = trainerScheduleData[selectedDay]?.find(
        (schedule) =>
          dayjs(schedule.reservationTime).format("HH:mm") === timeSlot.time,
      )?.status;

      const isUnavailable = unavailableTimes.includes(timeSlot.time);

      return {
        ...timeSlot,
        status: isUnavailable
          ? "UNAVAILABLE"
          : scheduleStatus ?? timeSlot.status,
      };
    });

    setAvailableTimes(timesWithUpdatedStatus);
  }, [selectedDay, trainerScheduleData, unavailableTimes]);

  // NOTE RESERVED, POSSIBLE은 기본적으로 선택된 값에 넣기
  useEffect(() => {
    const timesToBeSelected = availableTimes
      .filter(({ status }) => status === "RESERVED" || status === "POSSIBLE")
      .map(({ time }) => time);

    setSelectedTimes(timesToBeSelected);
  }, [availableTimes, selectedDay]);

  // NOTE trainer 출퇴근시간 가져오기
  useEffect(() => {
    if (trainerWorkScheduleData) {
      const workTimes: string[] = [];
      trainerWorkScheduleData.forEach((schedule) => {
        const { startAt, endAt } = schedule;

        const times = getTrainerWorkTimes(startAt, endAt);
        workTimes.push(...times);
      });
      setUnavailableTimes(workTimes);
    }
  }, [trainerWorkScheduleData, selectedDay]);

  useEffect(() => {
    setAvailableTimes((currentTimes) =>
      currentTimes.map((time) => ({
        ...time,
        status: unavailableTimes.includes(time.time)
          ? "UNAVAILABLE"
          : time.status,
      })),
    );
  }, [unavailableTimes, selectedDay]);

  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  const getTimeStatus = (time: string) => {
    const foundTime = availableTimes?.find((t) => t.time === time);
    return foundTime &&
      foundTime.status !== "RESERVED" &&
      foundTime.status !== "UNAVAILABLE"
      ? "available"
      : "unavailable";
  };

  const handleClickTime = (time: string) => {
    const isTimeAvailable = availableTimes.some(
      (t) =>
        t.time === time && (t.status === "OPEN" || t.status === "POSSIBLE"),
    );

    if (!isTimeAvailable) return;

    setSelectedTimes((prevSelectedTimes) => {
      const alreadySelected = prevSelectedTimes.includes(time);
      if (alreadySelected) {
        return prevSelectedTimes.filter((t) => t !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
  };

  const handleRegister = () => {
    registerScheduleMutate();
  };

  return (
    <>
      <S.Container>
        <S.TopContainer className="trainer">
          <TabMenu />
        </S.TopContainer>
        <S.CalendarContainer>
          <Calendar selectedDay={selectedDay} handleClickDay={handleClickDay} />
        </S.CalendarContainer>
        <S.BottomContainer className="reservation">
          <Time
            selectedDay={selectedDay}
            selectedTime={selectedTimes}
            getTimeStatus={getTimeStatus}
            handleClickTime={handleClickTime}
          />
          <S.ReservationButton onClick={handleRegister}>
            설정하기
          </S.ReservationButton>
        </S.BottomContainer>
      </S.Container>
      {isToastOpen && (
        <ToastNotification
          contents="스케줄 설정이 완료되었습니다."
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </>
  );
}
