import {
  IModifyInfomationParams,
  IModifyInfomationRes,
  IMyPageInfomationResponse,
} from "../../types/myPage/MyPage.types";
import { instance } from "../instance";

export const getMyPageInformationService =
  async (): Promise<IMyPageInfomationResponse> => {
    return await instance.get("/member");
  };

export const modifyInfomationService = async (
  params: IModifyInfomationParams,
): Promise<IModifyInfomationRes> => {
  const { name, phoneNumber, birth, address } = params;
  return await instance.put("/member", {
    name,
    phone_number: phoneNumber,
    birth,
    address,
  });
};
