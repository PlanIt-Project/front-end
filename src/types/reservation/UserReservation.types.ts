export interface IUserScheduleData {
  id: number;
  member: {
    id: number;
    name: string;
  };
  employee: {
    id: number;
    name: string;
  };
  programId: number;
  programName: string;
  reservationTime: string;
  programTime: string;
  status: string;
}

export interface IUserScheduleResponse {
  code: number;
  message: string;
  data: Record<string, IUserScheduleData[]>;
}
