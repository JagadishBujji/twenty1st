import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Banner from "./components/Banner";
import Service from "./components/ServiceScoller";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Work from "./pages/Work";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "services", element: <Service /> },
        { path: "work", element: <Work /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return routes;
}
