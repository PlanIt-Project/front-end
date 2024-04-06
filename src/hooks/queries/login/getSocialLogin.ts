import { useMutation } from "@tanstack/react-query";
import {socialLoginService} from "../../../api/services/Login.services";
import { ILoginResponse } from "../../../types/Login.types";
import { useAuthStore } from "../../../stores/authStore";
import { useNavigate } from "react-router";
import { IApiError } from "../../../types/Error.types";

export const getSocialLogin = (
    code: string
) => {
    const navigate = useNavigate();

    return useMutation<ILoginResponse, IApiError>({
        mutationFn: async () => await socialLoginService(code),
        onSuccess: async (data) => {
            useAuthStore.setState({
                accessToken: data.data.accessToken,
                refreshToken: data.data.refreshToken,
            });

            await useAuthStore.getState().userInfo();
            navigate("/main");
        },
    });
};
