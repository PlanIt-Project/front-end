import dayjs from "dayjs";
import { IEmailConfirmResponse } from "../../hooks/queries/getEmailConfirm";
import { IEmailNumberResponse } from "../../hooks/queries/getEmailNumber";
import { IRegisterSignUpResponse } from "../../hooks/queries/registerSignUp";
import { instance } from "../instance";

export const registerSignUpService = async (
  email: string,
  password: string,
  name: string,
  birth: string,
  gender: string,
  number: string,
  address: string,
): Promise<IRegisterSignUpResponse> => {
  return await instance.post("/member/signup", {
    email,
    password,
    name,
    birth: dayjs(birth, "YYYYMMDD").format("YYYY-MM-DD"),
    gender,
    phone_number: number,
    address,
  });
};

export const getEmailNumberService = async (
  email: string,
): Promise<IEmailNumberResponse> => {
  return await instance.post("/member/email", {
    email,
  });
};

export const getEmailConfirmService = async (
  email: string,
  validCode: string,
): Promise<IEmailConfirmResponse> => {
  return await instance.post("/member/email/check", {
    email,
    validCode,
  });
};
