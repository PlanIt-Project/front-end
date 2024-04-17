import {
  useMyPageToggleStore,
  useMyPageTriggerStore,
} from "../../../stores/myPageStore";
import {
  IModifyInfomationParams,
  IModifyInfomationRes,
} from "../../../types/myPage/MyPage.types";
import { useMutation } from "@tanstack/react-query";
import { modifyInfomationService } from "../../../api/services/MyPage.services";

export const modifyInfomation = (params: IModifyInfomationParams) => {
  const { myPageTrigger, setMyPageTrigger } = useMyPageTriggerStore();
  const { setToggle } = useMyPageToggleStore();

  return useMutation<IModifyInfomationRes, Error>({
    mutationFn: async () => await modifyInfomationService(params),
    onSuccess: () => {
      alert("정보 수정에 성공했습니다");
      setMyPageTrigger(!myPageTrigger);
      setToggle(true);
    },
    onError: () => {
      alert("수정에 실패했습니다");
      setToggle(true);
    },
  });
};
