import { useMutation } from "@tanstack/react-query";
import {
  IAdminMakeProductRes,
  IMakeProductParams,
} from "../../../types/admin/Admin.product.types";
import { makeProductServices } from "../../../api/services/admin/Product.services";
import { Dispatch, SetStateAction } from "react";
import { useAdminProductTriggerStore } from "../../../stores/adminProductStore";

export const makeProduct = (
  params: IMakeProductParams,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { productTrigger, setProductTrigger } = useAdminProductTriggerStore();

  return useMutation<IAdminMakeProductRes, Error>({
    mutationFn: async () => await makeProductServices(params),
    onSuccess: () => {
      alert("상품 등록에 성공했습니다");
      setOnModal(false);
      setProductTrigger(!productTrigger);
    },
    onError: () => {
      alert("등록에 실패했습니다");
      setOnModal(false);
    },
  });
};
