import {getSocialLogin} from "../hooks/queries/login/getSocialLogin";
import {useEffect} from "react";


export default function SocialLogin() {
    const pathname = window.location.pathname;
    const search = window.location.search;
    const apiEndPoint = pathname + search;

    const { mutate: socialLoginMutate} = getSocialLogin(
        apiEndPoint,
    );

    useEffect(() => {
        socialLoginMutate();
    })
    return (
        <>
        </>
    );
}
