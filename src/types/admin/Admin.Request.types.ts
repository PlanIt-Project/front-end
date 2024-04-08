export interface IAdminRequestResponse {
  message: string;
  code: number;
  data: IAdminRequestData;
}

export interface IAdminRequestData {
  content: IAdminRequestContent[];
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

export interface IAdminRequestContent {
  discount: number;
  id: number;
  member: IUser;
  product: IProduct;
  refundAt: string;
  registrationAt: string;
  status: string;
  totalPrice: string;
  trainer: IUser;
  trainerId: number;

}

interface IPageable {
    offset: number;
    pageNumber: number;
    pageSize: number;
  }

interface IUser {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  name: string;
  number: number;
  period: string;
  price: number;
  sellingType: string;
  type: "PT" | "MEMBERSHIP";
}

export interface IAdminRequestApproveResponse {
  message: string;
  code: number;
  data: number;
}