import { Navigate, RouteObject } from "react-router-dom";
// import { path } from "@/constants";
import { Students } from "./pages";
import { path } from "../../constants";

export const studentsRouter: RouteObject[] = [
  {
    path: path,
    element: <Students />,
  },
  {
    path: "",
    element: <Navigate to={path.lists} />,
  },
];
