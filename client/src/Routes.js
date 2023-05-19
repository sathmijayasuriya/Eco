import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
import Profilereg from "./Screens/Profilereg";
import SignIn from "./Screens/SignIn";
import Profileset from "./Screens/Profileset";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/profilereg",
    element: <Profilereg/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/profilesettings",
    element: <Profileset/>,
  },
]);
