import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { COOKIE_NAME } from '../utils/contansts';

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const [cookies] = useCookies([COOKIE_NAME]);

  return cookies[COOKIE_NAME] ? <Navigate to="/" /> : children;
};

export default PublicRoute;
