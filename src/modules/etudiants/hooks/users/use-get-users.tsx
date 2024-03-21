import { useEffect } from "react";
import { getUsers } from "./../../api";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const { data, error, } = useQuery([], () => getUsers());

  useEffect(() => {console.log("Error");
  }, [error]);

  return {
    data,
    error,
  };
};
