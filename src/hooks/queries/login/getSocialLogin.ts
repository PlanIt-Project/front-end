import {useQuery} from "@tanstack/react-query";
import {IApiError} from "../../../../../../planIT_front/front-end/src/types/Error.types";
import {socialLoginFormService} from "../../../api/services/Login.services";

export const getSocialLogin = (
    registrationId: string,
) => {
  return useQuery<string, IApiError>({
    queryKey: ["getSocialLogin"],
    queryFn: async (): Promise<string> => {
      const response = await socialLoginFormService(registrationId);

      if (response.code !== 200) {
        throw new Error("error");
      }

      return response.data;
    },
  });
};
