import { IAdminProductResponse } from "../../../types/admin/Admin.product.types";
import { instance } from "../../instance";

export const getAdminProductServices = async (
  page: number,
  size: number,
): Promise<IAdminProductResponse> => {
  return await instance.get("/product", {
    params: { page, size },
  });
};
