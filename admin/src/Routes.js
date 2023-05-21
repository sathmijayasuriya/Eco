import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Authentication from "./Screens/Authentication";
import SignIn from "./Screens/SignIn";
import AdminSignUp from "./Screens/AdminSignUp";
import Profilereg from "./Screens/Profilereg";
export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profilereg",
    element: <Profilereg />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
  {
    path: "/AdminSignUp",
    element: <AdminSignUp />,
  },
]);
