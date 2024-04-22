import { Dispatch, SetStateAction } from "react";
import { useAdminAccountTriggerStore } from "../../../stores/adminAccountStore";
import { useMutation } from "@tanstack/react-query";
import { IAdminAccountTransformRes } from "../../../types/admin/Admin.account.types";
import { transformToTrainerServices } from "../../../api/services/admin/Account.services";

export const transformToTrainer = (
  memberId: number,
  career: string,
  trainerMessage: string,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { accountTrigger, setAccountTrigger } = useAdminAccountTriggerStore();

  return useMutation<IAdminAccountTransformRes, Error>({
    mutationFn: async () =>
      await transformToTrainerServices(memberId, career, trainerMessage),
    onSuccess: () => {
      alert("트레이너 전환에 성공했습니다");
      setOnModal(false);
      setAccountTrigger(!accountTrigger);
    },
    onError: () => {
      alert("전환에 실패했습니다");
      setOnModal(false);
    },
  });
};
