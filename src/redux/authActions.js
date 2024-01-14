import { api } from "../axios/axios";
import { initialUser, removeUser } from "./user/user.slice";

const login = (params) => api.post("auth/login/", params);

const logout = () =>{
  const refresh = localStorage.getItem("refreshToken");
  return api.post("auth/logout/", {refresh})}

export const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      const response = await login(params);

      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);

      dispatch(initialUser(response?.data.user));
    } catch (e) {
      const status = e.response?.status;
      const notFoundMessage = "Jar does not found for user";
      const message =
        e.response?.data.message === notFoundMessage
          ? notFoundMessage
          : e.message;

      dispatch({ type: "GET_JAR_FAILURE", payload: { status, message } });
    }
  };
};

export const fetchLogout = () => {
  return async (dispatch) => {
    try {
      await logout();

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      dispatch(removeUser());
    } catch (e) {
      const status = e.response?.status;
      const notFoundMessage = "Jar does not found for user";
      const message =
        e.response?.data.message === notFoundMessage
          ? notFoundMessage
          : e.message;

      dispatch({ type: "GET_JAR_FAILURE", payload: { status, message } });
    }
  };
};
