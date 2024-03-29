export interface ITimeProps {
  selectedDay: string;
  selectedTime: string;
  isTimeAvailable: (time: string) => boolean;
  handleClickTime: (time: string) => void;
}
