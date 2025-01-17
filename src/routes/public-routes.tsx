import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { COOKIE_AUTH } from '../utils/constants';
import { ChildrenProp } from '@/types';

const PublicRoute: React.FC<ChildrenProp> = ({ children }) => {
  const [cookies] = useCookies([COOKIE_AUTH]);

  return cookies[COOKIE_AUTH] ? <Navigate to="/" /> : children;
};

export default PublicRoute;
