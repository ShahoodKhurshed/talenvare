import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const  PublicRoutes = ({ Auth }) => {
    const isAuthenticated = Auth();
  return !isAuthenticated ? <Outlet /> : <Navigate replace to="/" />;
};

export default PublicRoutes;
