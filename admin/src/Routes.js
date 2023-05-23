import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Authentication from "./Screens/Authentication";
import SignIn from "./Screens/SignIn";
import AdminSignUp from "./Screens/AdminSignUp";
import AddSalary from "./Screens/AddSalary";
import ViewSalary from "./Screens/ViewSalary";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },

  {
    path: "/authentication",
    element: <Authentication/>,
  },
  {
    path: "/AdminSignIn",
    element: <SignIn/>,
  },
  {
    path: "/AdminSignUp",
    element: <AdminSignUp/>,
  },
  {
    path: "/AddSalary",
    element: <AddSalary/>,
  },
  {
    path: "/ViewSalary",
    element: <ViewSalary/>,
  },
]);


