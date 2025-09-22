import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, session } = useAuth();

  if (isAuthenticated) {
    // Redirect based on role
    if (session?.user?.role === "admin") {
      return <Navigate to="/eonestep/admin-dashboard" replace />;
    }
    if (session?.user?.role === "franchise") {
      return <Navigate to="/eonestep/center-dashboard" replace />;
    }
  }

  return children; // allow access if not logged in
};

export default PublicRoute;
