import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddCollection from "@/pages/admin/AddCollection";
import CollectionList from "@/pages/admin/CollectionList";
import Dashboard from "@/pages/admin/Dashboard";
import Home from "@/pages/home";

import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-collection",
        element: <AddCollection />,
      },
      {
        path: "collection-list",
        element: <CollectionList />,
      },
    ],
  },
]);

export default router;
