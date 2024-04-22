import { Dispatch, SetStateAction } from "react";
import { useAdminBannerTriggerStore } from "../../../stores/adminBannerStore";
import { useMutation } from "@tanstack/react-query";
import { IAdminBannerRes } from "../../../types/admin/Admin.banner.types";
import { modifyBannerServices } from "../../../api/services/admin/Banner.services";

export const modifyBanner = (
  form: FormData,
  bannerId: number,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
    const { bannerTrigger, setBannerTrigger } = useAdminBannerTriggerStore();
    return useMutation<IAdminBannerRes, Error>({
        mutationFn: async () => await modifyBannerServices(form, bannerId),
        onSuccess: () => {
            alert("배너 수정에 성공했습니다");
            setOnModal(false);
            setBannerTrigger(!bannerTrigger);
          },
          onError: () => {
            alert("수정에 실패했습니다");
            setOnModal(false);
          },

    })
};
