import { Axios } from "@/constants";
import { TUser } from "./../types";
import { urls } from ".";

export const getUsers = async () => {
  const response = await Axios.get<TUser[]>(urls.users);
  return response.data;
};
