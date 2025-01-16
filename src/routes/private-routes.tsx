import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { COOKIE_AUTH } from '../utils/contansts';
import Layout from '@/components/common/layout';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [cookies] = useCookies([COOKIE_AUTH]);
  return cookies[COOKIE_AUTH] ? (
    <Layout> {children}</Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
