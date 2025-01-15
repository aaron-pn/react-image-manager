import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { COOKIE_NAME } from '../utils/contansts';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [cookies] = useCookies([COOKIE_NAME]);
  return cookies[COOKIE_NAME] ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
