export interface ITimeProps {
  selectedDay: string;
  selectedTime: string | string[];
  getTimeStatus: (time: string) => "unavailable" | "available";
  handleClickTime: (time: string) => void;
}
