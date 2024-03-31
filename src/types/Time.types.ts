export interface ITimeProps {
  selectedDay: string;
  selectedTime: string;
  getTimeStatus: (time: string) => "unavailable" | "available";
  handleClickTime: (time: string) => void;
}
