import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
