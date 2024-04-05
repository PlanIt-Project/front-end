export interface IAdminProductResponse {
  message: string;
  code: number;
  data: IAdminProductData;
}

export interface IAdminProductData {
  content: IAdminProductContent[];
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

export interface IAdminProductContent {
  id: number;
  name: string;
  number: number;
  period: string;
  price: number;
  sellingType: string;
  type: "PT" | "MEMBERSHIP";
}

interface IPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
}

export interface IAdminProductMakeForm {
  name: string;
  type: "PT" | "MEMBERSHIP";
  year: number;
  month: number;
  day: number;
  number: number;
  price: number;
}

export interface IAdminMakeProductRes {
  message: string;
  code: number;
  data: IAdminProductContent;
}

export interface IMakeProductParams {
  name: string;
  period: string;
  number: string;
  price: number;
  type: "PT" | "MEMBERSHIP";
}

export interface IAdminDeleteProductRes {
  message: string;
  code: number;
  data: string;
}