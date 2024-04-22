export interface IMyPageInfomationResponse {
  message: string;
  code: number;
  data: IMyPageInfomationData;
}

export interface IMyPageInfomationData {
  address: string;
  birth: string;
  email: string;
  gender: "MALE" | "FEMALE";
  id: number;
  name: string;
  phone_number: string;
  role: "ADMIN" | "TRAINER" | "MEMBER";
}

export interface IModifyInfomationRes {
  code: 200;
  message: "OK";
  data: IModifyResData;
}

export interface IModifyResData {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  birth: string;
  address: string;
  role: "ADMIN" | "TRAINER" | "MEMBER";
  gender: "MALE" | "FEMALE";
  id: 3;
}

export interface IModifyInfomationParams {
  name: string;
  phoneNumber: string;
  birth: string;
  address: string;
}
