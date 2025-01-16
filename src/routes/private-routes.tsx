import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { COOKIE_AUTH } from '../utils/contansts';
import Layout from '@/components/common/layout';
import { ChildrenProp } from '@/types';

const PrivateRoute: React.FC<ChildrenProp> = ({ children }) => {
  const [cookies] = useCookies([COOKIE_AUTH]);
  return cookies[COOKIE_AUTH] ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
