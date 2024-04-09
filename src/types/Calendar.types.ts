export interface ICalendarProps {
  selectedDay: string;
  handleClickDay: (day: string) => void;
  isAllowClick?: boolean;
}
