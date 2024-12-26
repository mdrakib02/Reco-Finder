import axios from "axios";
import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import AuthContext from "../Provider/AuthContext";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
// const {logout} = useAuth()
  const navigate = useNavigate();
console.log(logOut)
  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log("error from axios", error.response);
        if (error.response?.status === 401 || error.response?.status === 403) {
            logOut();
          navigate("/login");
          console.log("Error handaling")
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;


