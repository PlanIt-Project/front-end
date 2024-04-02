export interface ITimeProps {
  selectedDay: string;
  selectedTime: string;
  getTimeStatus: (time: string) => "unavailable" | "available" | "reserved";
  handleClickTime: (time: string) => void;
}
