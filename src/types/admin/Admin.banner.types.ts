import { URL } from "url";

export interface IAdminBannerResponse {
  message: string;
  code: number;
  data: IAdminBannerData;
}

export interface IAdminBannerData {
  content: IAdminBannerContent[];
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

export interface IAdminBannerContent {
  endAt: string;
  id: number;
  imagePath: string;
  startAt: string;
  title: string;
}

interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
}
