import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function UserRoute() {
  // TODO 로그인 연결 시 zustand로 대체 필요
  const [userLogin] = useState(true);

  return !userLogin ? <Navigate to="/login" /> : <Outlet />;
}
