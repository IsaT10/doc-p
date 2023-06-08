import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AuthLayouts from "../../Layouts/AuthLayouts";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayouts from "../../Layouts/DashboardLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/appointment", element: <Appointment /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/dashboard",
        element: <DashboardLayouts />,
        children: [
          {
            path: "/dashboard",
            element: (
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            ),
          },
        ],
      },
    ],
  },
]);
