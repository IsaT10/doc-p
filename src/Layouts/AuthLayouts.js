import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
