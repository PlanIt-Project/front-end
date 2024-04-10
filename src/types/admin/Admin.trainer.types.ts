export interface IAdminTrainerResponse {
  message: string;
  code: number;
  data: IAdminTrainerData;
}

export interface IAdminTrainerData {
  content: IAdminTrainerContent[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable?: IPageable;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
}

export interface IAdminTrainerContent {
  address: string;
  birth: string;
  career: string;
  email: string;
  id: number;
  name: string;
  phone_number: string;
  role: "ADMIN" | "TRAINER" | "MEMBER";
  trainerMessage: string | null;
}

export interface IAdminTrainerScheduleRes {
  message: string;
  code: number;
  data: IAdminTrainerScheduleData[];
}

export interface IAdminTrainerScheduleData {
  schedule_id: number;
  week: "Mon" | "Tue" | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
  startAt: string;
  endAt: string;
}
