import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Layout from "../pages/layout";

import SingIn from "../pages/login";
import SignUp from "../pages/login/signup";
import Timer from "../pages/timer";
import Goals from "../pages/goals";
const router = createBrowserRouter([
  { path: "/", element: <SingIn /> },
  { path: "register", element: <SignUp /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "timer", element: <Timer /> },
  {
    path: "layout",
    element: <Layout />,
    children: [
      { path: "timer", element: <Timer /> },
      { path: "goals", element: <Goals /> },
    ],
  },
]);

export default router;
