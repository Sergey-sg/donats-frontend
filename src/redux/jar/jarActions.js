import { initialJar } from "./jar.slice";
import { api } from "../../axios/axios";
import { initialJars } from "./jars.slice";
import { initialBanner } from "./banner.slice";

const getJarById = (jarId) => {
  return api.get(`jars/${jarId}/`);
};

const getJars = () => api.get("jars/");

const getJarsForBanner = () => api.get("jars/banner/");

export const fetchGetJarById = (jarId) => {
  return async (dispatch) => {
    try {
      const response = await getJarById(jarId);

      dispatch(initialJar(response?.data));
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

export const fetchGetJars = () => {
  return async (dispatch) => {
    try {
      const response = await getJars();

      dispatch(initialJars(response?.data));
    } catch (e) {
      const status = e.response?.status;
      const notFoundMessage = "Jars does not found";
      const message =
        e.response?.data.message === notFoundMessage
          ? notFoundMessage
          : e.message;

      dispatch({ type: "GET_JAR_FAILURE", payload: { status, message } });
    }
  };
};


export const fetchGetJarsForBanner = () => {
  return async (dispatch) => {
    try {
      const response = await getJarsForBanner();

      dispatch(initialBanner(response?.data));
    } catch (e) {
      const status = e.response?.status;
      const notFoundMessage = "Jars for Banner does not found";
      const message =
        e.response?.data.message === notFoundMessage
          ? notFoundMessage
          : e.message;

      dispatch({ type: "GET_JAR_FAILURE", payload: { status, message } });
    }
  };
};