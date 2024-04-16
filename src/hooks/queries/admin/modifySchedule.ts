import { Dispatch, SetStateAction } from "react";
import { useAdminProductTriggerStore } from "../../../stores/adminProductStore";
import { useMutation } from "@tanstack/react-query";
import { modifyScheduleServices } from "../../../api/services/admin/Trainer.sevices";
import { IAdminTrainerScheduleModifyRes, IModifyScheduleParams } from "../../../types/admin/Admin.trainer.types";

export const modifySchedule = (
  scheduleId: number,
  params:IModifyScheduleParams,
  setOnModal: Dispatch<SetStateAction<boolean>>,
) => {
  const { productTrigger, setProductTrigger } = useAdminProductTriggerStore();

  return useMutation<IAdminTrainerScheduleModifyRes, Error>({
    mutationFn: async () =>
      await modifyScheduleServices(scheduleId, params),
    onSuccess: () => {
      alert("스케줄 수정에 성공했습니다");
      setOnModal(false);
      setProductTrigger(!productTrigger);
    },
    onError: () => {
      alert("등록에 실패했습니다");
      setOnModal(false);
    },
  });
};
