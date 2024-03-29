import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function AdminRoute() {
  const { user } = useAuthStore((state) => state);

  return user?.role !== "ADMIN" ? <Navigate to="/login" /> : <Outlet />;
}
