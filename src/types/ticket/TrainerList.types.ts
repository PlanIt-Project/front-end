import { IPageable } from "../Pageable.types";

export interface ITrainerContent {
  id: number;
  email: string;
  name: string;
  phone_number: string;
  birth: string;
  address: string;
  role: "TRAINER" | "ADMIN" | "MEMBER";
  career: string;
  trainerMessage: null | string;
}

export interface ITrainerData {
  content: ITrainerContent[];
  pageable: IPageable;
  size: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface ITrainerList {
  code: number;
  message: string;
  data: ITrainerData;
}
