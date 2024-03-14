export interface ITimeProps {
  selectedDay: Date;
  selectedTime: string;
  isTimeAvailable: (time: string) => boolean;
  handleClickTime: (time: string) => void;
}
