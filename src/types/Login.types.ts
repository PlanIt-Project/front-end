export interface ILogin {
  user: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface ILoginResponse {
  code: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IMemberData {
  email: string;
  name: string;
  phone_number: string;
  birth: string;
  address: string;
  role: "ADMIN" | "TRAINER" | "MEMBER";
  trainerInfo: {
    id: number;
    career: string;
    trainerMessage: null | string;
  };
  id: null | number;
}

export interface IMemberResponse {
  code: number;
  message: string;
  data: IMemberData;
}
