import { Dispatch, SetStateAction } from "react";
import { useAdminBannerTriggerStore } from "../../../stores/adminBannerStore";
import { useMutation } from "@tanstack/react-query";
import { IAdminDeleteBannerRes } from "../../../types/admin/Admin.banner.types";
import { deleteBannerServices } from "../../../api/services/admin/Banner.services";

export const deleteBanner = (
  bannerId: number,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { bannerTrigger, setBannerTrigger } = useAdminBannerTriggerStore();

  return useMutation<IAdminDeleteBannerRes, Error>({
    mutationFn: async () => await deleteBannerServices(bannerId),
    onSuccess: () => {
        alert("상품이 삭제되었습니다");
        setOnModal(false);
        setBannerTrigger(!bannerTrigger);
        
    },
    onError: () => {
        alert("삭제를 실패했습니다");
        setOnModal(false)
    }
  })
};
