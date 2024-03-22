import { IPageable } from "./Pageable.types";

export interface ITicketContent {
  id: number;
  productName: string;
  remainedNumber: number;
  startAt: string;
  endAt: string;
  suspendAt: null | string;
  resumeAt: null | string;
  status: string;
  member: {
    id: number;
    name: string;
  };
  employee: null | string;
}

export interface ITicketList {
  content: ITicketContent[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}
