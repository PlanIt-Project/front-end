import { useQuery } from "@tanstack/react-query";
import { getAdminProductServices } from "../../../api/services/admin/Product.services";
import { IAdminProductData } from "../../../types/admin/Admin.product.types";

export const getAdminProduct = (page: number, size: number) => {
  return useQuery<IAdminProductData, Error>({
    queryKey: ["getAdminProduct", page],
    queryFn: async (): Promise<IAdminProductData> => {
      const response = await getAdminProductServices(page, size);

      return response.data;
    },
    refetchOnMount: true
  });
};
