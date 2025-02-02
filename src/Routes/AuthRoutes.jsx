import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = ({ Auth }) => {
  const isAuthenticated = Auth(); // Check authentication
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoutes;
