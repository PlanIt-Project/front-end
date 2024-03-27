import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../../api/services/Login.services";
import { ILoginResponse } from "../../../types/Login.types";
import { useAuthStore } from "../../../stores/authStore";
import { useNavigate } from "react-router";
import { Dispatch, SetStateAction } from "react";
import { IApiError } from "../../../types/Error.types";

export const getLogin = (
  email: string,
  password: string,
  setIsToastOpen: Dispatch<SetStateAction<boolean>>,
  setLoginError: Dispatch<SetStateAction<string>>,
) => {
  const navigate = useNavigate();

  return useMutation<ILoginResponse, IApiError>({
    mutationFn: async () => await loginService(email, password),
    onSuccess: async (data) => {
      useAuthStore.setState({
        accessToken: data.data.accessToken,
        refreshToken: data.data.refreshToken,
      });

      await useAuthStore.getState().userInfo();
      navigate("/main");
    },
    onError: (error: IApiError) => {
      setIsToastOpen(true);
      setLoginError(error.message);
    },
  });
};
