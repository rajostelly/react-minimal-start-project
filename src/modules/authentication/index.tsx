import { Navigate, RouteObject } from "react-router-dom";
import { path } from "@/constants";
import { Login, Register } from "./pages";


export const authenticationRouter: RouteObject[] = [
  {
    path: path.login,
    element: <Login />,
  },
  {
    path: path.register,
    element: <Register />,
  },
  {
    path: "",
    element: <Navigate to={path.login} />,
  },
];
