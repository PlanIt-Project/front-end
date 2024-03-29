export interface ITrainerReservationData {
  id: number;
  member: null | string;
  employee: {
    id: number;
    name: string;
  };
  programId: null | number;
  programName: null | string;
  reservationTime: string;
  programTime: null | string;
  status: "RESERVED" | "POSSIBLE" | "FINISHED";
}

export interface ITrainerReservationResponse {
  code: number;
  message: string;
  data: ITrainerReservationData[];
}

export interface IFilteredTimeList {
  id: number;
  reservationTime: string;
  status: "RESERVED" | "POSSIBLE" | "FINISHED";
}
