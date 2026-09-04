import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthorized = sessionStorage.getItem("adminAuthenticated") === "true";

  if (!isAuthorized) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
