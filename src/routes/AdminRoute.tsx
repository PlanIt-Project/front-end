import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function AdminRoute() {
  // TODO 로그인 연결 시 zustand로 대체 필요
  const [adminLogin] = useState(true);

  return !adminLogin ? <Navigate to="/login" /> : <Outlet />;
}
