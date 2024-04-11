export interface IAdminAccountResponse {
  message: string;
  code: number;
  data: IAdminAccountData;
}

export interface IAdminAccountData {
  content: IAdminAccountContent[];
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

export interface IAdminAccountContent {
  address: string;
  birth: string;
  email: string;
  gender: "MALE" | "FEMALE";
  id: number;
  name: string;
  phone_number: string;
  role: "ADMIN" | "TRAINER" | "MEMBER";
  trainerInfo: null | ITrainer;
}

interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
}

interface ITrainer {
  id: number;
  career: string;
}
