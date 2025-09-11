import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function   ProtectedRoute({ children, role }) {
  const { session } = useAuth();
  if (!session || (role && session?.user?.role !== role)) {
    return <Navigate to="/eonestep/center-login" replace />;
  }
  return children;
}
