import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {socialLoginFormService} from "../../../api/services/Login.services";
import { IApiError } from "../../../types/Error.types";

export const getSocialLogin = (
    registrationId: string,
): UseQueryResult<string, IApiError> & { mutate: (registrationId: string) => Promise<{ data: string }> } => {
  const queryResult = useQuery<string, IApiError>({
    queryKey: ["getSocialLogin"],
    queryFn: async () => {
      if (!registrationId) {
        return '';
      }

      const response = await socialLoginFormService(registrationId);

      if (response.code !== 200) {
        throw new Error("error");
      }

      return response.data;
    },
    enabled: !!registrationId,
  });

  return {
    ...queryResult,
    mutate: async (registrationId: string) => {
      try {
        const response = await socialLoginFormService(registrationId);
        return { data: response.data };
      } catch (error) {
        throw new Error("error");
      }
    },
  };
};
