export type IOption = "VALID" | "ALL" | "INVALID";

export interface IAdminProgramData {
  content: IAdminProgramContent[];
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

export interface IAdminProgramResponse {
  message: string;
  code: number;
  data: IAdminProgramData;
}

interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
}

export interface IAdminProgramContent {
  employee: IUser;
  endAt: string;
  id: number;
  member: IUser;
  productName: string;
  remainedNumber: number;
  resumeAt: string;
  startAt: string;
  status: IStatus;
  suspendAt: string;
}

interface IUser {
  id: number;
  name: string;
}

type IStatus = "NOT_STARTED" | "IN_PROGRESS" | "SUSPEND" | "REFUND" | "EXPIRED";

export interface IAdminProgramStatusResponse {
  message: string;
  code: number;
  data: string;
};

