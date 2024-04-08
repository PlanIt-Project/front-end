import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { IAdminDeleteProductRes } from "../../../types/admin/Admin.product.types";
import { deleteProductServices } from "../../../api/services/admin/Product.services";
import { useAdminProductTriggerStore } from "../../../stores/adminProductStore";

export const deleteProduct = (
  productId: number,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { productTrigger, setProductTrigger } = useAdminProductTriggerStore();

  return useMutation<IAdminDeleteProductRes, Error>({
    mutationFn: async () => await deleteProductServices(productId),
    onSuccess: () => {
      alert("상품이 삭제되었습니다");
      setOnModal(false);
      setProductTrigger(!productTrigger);
    },
    onError: () => {
      alert("삭제를 실패했습니다");
      setOnModal(false);
    },
  });
};
