import { useMutation } from "@tanstack/react-query";
import {
  IAdminMakeProductRes,
  IMakeProductParams,
} from "../../../types/admin/Admin.product.types";
import { makeProductServices } from "../../../api/services/admin/Product.services";
import { Dispatch, SetStateAction } from "react";

export const makeProduct = (
  params: IMakeProductParams,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  return useMutation<IAdminMakeProductRes>({
    mutationFn: async () => await makeProductServices(params),
    onSuccess: () => {
      alert("상품 등록에 성공했습니다");
      setOnModal(false)
    },
    onError: () => {
      alert("등록에 실패했습니다");
      setOnModal(false)
    },
  });
};
