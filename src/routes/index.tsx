/* eslint-disable react-refresh/only-export-components */
import { path } from "@/constants";
import { Navigate, Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { authenticationRouter } from "@/modules/authentication";
import { studentsRouter } from "@/modules/etudiants";

const router: RouteObject[] = [
  {
    path: path.authentication,
    element: <Outlet />,
    children: authenticationRouter,
  },
  {
    path : path.students,
    element: <Outlet />,
    children: studentsRouter
  },
  {
    path: "",
    element: <Navigate to={path.authentication} />,
  },
];

export default createBrowserRouter(router);
