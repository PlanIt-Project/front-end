import { IAdminProgramResponse } from "../../../types/admin/Admin.program.types";
import { instance } from "../../instance";


export const getAdminProgramServices = async (option:string):Promise<IAdminProgramResponse> => {
    return await instance.get(`/admin/program?option=${option}`);
};