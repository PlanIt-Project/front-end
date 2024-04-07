import { IPageable } from "./Pageable.types";

export interface IBannerListData {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
  imagePath: string;
}

export interface IBannerListResponse {
  code: number;
  message: string;
  data: {
    content: IBannerListData[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: IPageable;
    size: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    totalElements: number;
    totalPages: number;
  };
}
