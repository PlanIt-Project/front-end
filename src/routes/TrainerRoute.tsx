import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function TrainerRoute() {
  const { user } = useAuthStore((state) => state);

  return user?.role !== "TRAINER" ? <Navigate to="/login" /> : <Outlet />;
}
