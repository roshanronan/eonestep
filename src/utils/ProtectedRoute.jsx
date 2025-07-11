import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user || (role && user?.role !== role)) {
    return <Navigate to="/eonestep/center-login" replace />;
  }
  return children;
}
