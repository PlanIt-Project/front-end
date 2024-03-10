import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function TrainerRoute() {
  // TODO 로그인 연결 시 zustand로 대체 필요
  const [trainerLogin] = useState(true);

  return !trainerLogin ? <Navigate to="/login" /> : <Outlet />;
}
