export interface ITrainerWorkScheduleData {
  schedule_id: number;
  week: "Mon" | "Tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  startAt: string;
  endAt: string;
}

export interface ITrainerWorkScheduleResponse {
  code: number;
  message: string;
  data: ITrainerWorkScheduleData[];
}
