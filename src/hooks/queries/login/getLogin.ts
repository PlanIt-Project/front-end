import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../../api/services/Login.services";
import { ILoginResponse } from "../../../types/Login.types";
import { useAuthStore } from "../../../stores/authStore";

export const getLogin = (email: string, password: string) => {
  return useMutation<ILoginResponse>({
    mutationFn: async () => await loginService(email, password),
    onSuccess: (data) => {
      useAuthStore.setState({
        accessToken: data.data.accessToken,
        refreshToken: data.data.refreshToken,
      });

      if (data) {
        useAuthStore.getState().userInfo();
      }
    },
  });
};
