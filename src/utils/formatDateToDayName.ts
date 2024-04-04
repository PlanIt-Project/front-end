import dayjs from "dayjs";

export const formatDateToDayName = (date: string) => {
  const DayName = dayjs(date).format("ddd");

  switch (DayName) {
    case "Mon":
      return "Mon";
    case "Tue":
      return "Tue";
    case "Wed":
      return "wed";
    case "Thu":
      return "thu";
    case "Fri":
      return "fri";
    case "Sat":
      return "sat";
    case "Sun":
      return "sun";
  }
};
