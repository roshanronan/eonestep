import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function ProtectedRoute({ children, roles }) {
  const { session } = useAuth();
  
  // Convert single role to an array for consistent handling
  const allowedRoles = Array.isArray(roles) ? roles : [roles];

  const userHasRequiredRole = session?.user?.role && allowedRoles.includes(session.user.role);

  if (!session || !userHasRequiredRole) {
    return <Navigate to="/center-login" replace />;
  }

  return children;
}
