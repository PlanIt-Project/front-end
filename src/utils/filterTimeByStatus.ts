import dayjs from "dayjs";
import {
  IFilteredTimeList,
  IStatus,
} from "../types/reservation/TrainerReservation.types";

export const filterTimesByStatus = (
  data: IFilteredTimeList[],
  statusToFilter: IStatus,
) => {
  return data
    .filter(({ status }) => status === statusToFilter)
    .map(({ id, reservationTime, status }) => {
      const time = dayjs(reservationTime).format("HH:mm");
      return { id, reservationTime: time, status };
    });
};
