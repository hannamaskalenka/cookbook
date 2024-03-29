import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import useAuthContext from 'shared/contexts/AuthContext';

const ProtectedRoute: FC = () => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.auth} replace />;
};
export default ProtectedRoute;
