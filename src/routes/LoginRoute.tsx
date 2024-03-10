import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function LoginRoute() {
  // TODO 로그인 연결 시 zustand로 대체 필요
  const login = useState(true);

  return !login ? <Navigate to="/login" /> : <Outlet />;
}
