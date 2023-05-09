import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Banner from "./components/Banner";
import Service from "./components/ServiceScoller";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Work from "./pages/Work";
import Services from "./pages/Services";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "services", element: <Services/> },
        { path: "work", element: <Work /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return routes;
}
