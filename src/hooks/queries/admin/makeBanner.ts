import { Dispatch, SetStateAction } from "react";
import { useAdminBannerTriggerStore } from "../../../stores/adminBannerStore";
import { useMutation } from "@tanstack/react-query";
import { IAdminMakeBannerRes } from "../../../types/admin/Admin.banner.types";
import { makeBannerServices } from "../../../api/services/admin/Banner.services";

export const makeBanner = (
  form: FormData,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { bannerTrigger, setBannerTrigger } = useAdminBannerTriggerStore();
  return useMutation<IAdminMakeBannerRes, Error>({
    mutationFn: async () => await makeBannerServices(form),
    onSuccess: () => {
      alert("배너 등록에 성공했습니다");
      setOnModal(false);
      setBannerTrigger(!bannerTrigger);
    },
    onError: () => {
      alert("등록에 실패했습니다");
      setOnModal(false);
    },
  });
};
