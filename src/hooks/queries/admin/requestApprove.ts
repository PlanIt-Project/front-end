import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { IAdminRequestApproveResponse } from "../../../types/admin/Admin.Request.types";
import { requestApproveServices } from "../../../api/services/admin/Request.services";
import { useAdminRequestTriggerStore } from "../../../stores/adminRequestStore";

export const requestApprove = (
    registrationId:number,
    trainerId: number,
    setOnModal: Dispatch<SetStateAction<boolean>>,    
) => {
    const { requestTrigger, setRequestTrigger} = useAdminRequestTriggerStore();

    return useMutation<IAdminRequestApproveResponse, Error>({
        mutationFn: async () => await requestApproveServices(registrationId, trainerId),
        onSuccess: () => {
            alert("등록 승인에 성공했습니다");
            setOnModal(false)
            setRequestTrigger(!requestTrigger);
        },
        onError: () => {
            alert("승인에 실패했습니다");
            setOnModal(false);
        }
    })
}