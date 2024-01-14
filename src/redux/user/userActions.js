import { api } from "../../axios/axios";
import { initialUser } from "./user.slice";

const getAuthorizedUser = () => api.get("user/");

export const fetchGetAuthorizedUser = () => {
  return async (dispatch) => {
    try {
      const response = await getAuthorizedUser();

      dispatch(initialUser(response?.data));

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
