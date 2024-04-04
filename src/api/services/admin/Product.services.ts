import {
  IAdminMakeProductRes,
  IAdminProductResponse,
  IMakeProductParams,
} from "../../../types/admin/Admin.product.types";
import { instance } from "../../instance";



export const getAdminProductServices = async (
  page: number,
  size: number,
): Promise<IAdminProductResponse> => {
  return await instance.get("/product", {
    params: { page, size },
  });
};

export const makeProductServices = async (
  params: IMakeProductParams,
): Promise<IAdminMakeProductRes> => {
  const { name, period, number, price, type } = params;
  console.log(params)
  return await instance.post("/admin/product", {
    name,
    period,
    number,
    price,
    type,
  });
};
