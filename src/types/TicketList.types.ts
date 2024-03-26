import { IPageable } from "./Pageable.types";

export interface ITicketContent {
  id: number;
  name: string;
  number: number;
  period: string;
  price: number;
  sellingType: string;
  type: string;
}

export interface ITicketData {
  content: ITicketContent[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageable;
  size: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  totalElements: number;
  totalPages: number;
}

export interface ITicketList {
  code: number;
  message: string;
  data: ITicketData;
}
