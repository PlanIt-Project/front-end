import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function LoginRoute() {
  const { user } = useAuthStore((state) => state);

  return !user?.role ? <Navigate to="/login" /> : <Outlet />;
}
