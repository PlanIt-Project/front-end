import { IPageable } from "../Pageable.types";

export interface IProgramContent {
  id: number;
  productName: string;
  remainedNumber: number;
  startAt: string;
  endAt: null | string;
  suspendAt: null | string;
  resumeAt: null | string;
  status: string;
  member: null | {
    id: number;
    name: string;
  };
  employee: null | {
    id: number;
    name: string;
  };
}

export interface IProgramData {
  content: IProgramContent[];
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

export interface IProgramList {
  code: number;
  message: string;
  data: IProgramData;
}
