import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

export default function UserRoute() {
  const { user } = useAuthStore((state) => state);

  return user?.role !== "MEMBER" ? <Navigate to="/login" /> : <Outlet />;
}
