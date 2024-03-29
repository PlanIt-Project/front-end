import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../../api/services/Login.services";
import { ILoginResponse } from "../../../types/Login.types";
import { useAuthStore } from "../../../stores/authStore";
<<<<<<< HEAD

export const getLogin = (email: string, password: string) => {
  return useMutation<ILoginResponse>({
    mutationFn: async () => await loginService(email, password),
    onSuccess: (data) => {
=======
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
>>>>>>> 2f401cd28126a553131463197c5bb02d92d1094e
      useAuthStore.setState({
        accessToken: data.data.accessToken,
        refreshToken: data.data.refreshToken,
      });

<<<<<<< HEAD
      if (data) {
        useAuthStore.getState().userInfo();
      }
=======
      await useAuthStore.getState().userInfo();
      navigate("/main");
    },
    onError: (error: IApiError) => {
      setIsToastOpen(true);
      setLoginError(error.message);
>>>>>>> 2f401cd28126a553131463197c5bb02d92d1094e
    },
  });
};
