import dayjs from "dayjs";

export const getTimeWithLabel = (date: string) => {
  const label = dayjs(date).format("A") === "AM" ? "오전" : "오후";

  const time = dayjs(date).format("hh:mm");

  return `${label} ${time}`;
};
