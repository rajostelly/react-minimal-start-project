import axios from "axios";

const baseUrl = import.meta.env.VITE_API;

const Axios = axios.create({
  baseURL: baseUrl ?? "",
  headers: {
    "Content-Type": "application/json",
  },
});

export { Axios };
