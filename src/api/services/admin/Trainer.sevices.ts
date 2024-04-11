import {
  IAdminTrainerResponse,
  IAdminTrainerScheduleModifyRes,
  IAdminTrainerScheduleRes,
  IModifyScheduleParams,
} from "../../../types/admin/Admin.trainer.types";
import { instance } from "../../instance";

export const getAdminTrainerServices = async (
  page: number,
  size: number,
): Promise<IAdminTrainerResponse> => {
  return await instance.get("/member/employee", {
    params: { page, size },
  });
};

export const getAdminTrainerScheduleServices = async (
  trainerId: number,
): Promise<IAdminTrainerScheduleRes> => {
  return await instance.get(`/admin/trainer-schedule/${trainerId}`);
};

export const modifyScheduleServices = async (
  scheduleId: number,
  params:IModifyScheduleParams
): Promise<IAdminTrainerScheduleModifyRes> => {
  const {startAt, endAt} = params;
  return await instance.put(`/admin/trainer-schedule/${scheduleId}`, {
    startAt,
    endAt,
  });
};
