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
