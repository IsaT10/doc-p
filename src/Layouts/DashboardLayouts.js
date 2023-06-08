import React from "react";
import SideNavbar from "../Pages/Shared/SideNavbar/SideNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayouts = () => {
  return (
    <div className="grid grid-cols-12">
      <SideNavbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayouts;
