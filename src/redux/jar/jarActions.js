import { initialJar } from "./jar.slice";
import { api } from "../../axios/axios";
import { initialJars } from "./jars.slice";
import { initialBanner } from "./banner.slice";
import queryString from "query-string";
import { initialTags } from "./tags.slice";
import { initialJarStatistic } from "./jarStatistic.slice";

const getJarById = (jarId) => api.get(`jars/${jarId}/`);

const getAllJars = (filtersParams) => {
  return api.get(`/jars?${queryString.stringify(filtersParams)}`);
};

const getJarsForBanner = () => api.get("jars/banner/");

const getAllTags = () => api.get("jars/tags/");

const getJarStatistic = (jarId) => api.get(`jars/${jarId}/statistic/`);

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

export const fetchGetAllJars = (filtersParams) => {
  return async (dispatch) => {
    try {
      const response = await getAllJars(filtersParams);

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

export const fetchGetAllTags = () => {
  return async (dispatch) => {
    try {
      const response = await getAllTags();

      dispatch(initialTags(response?.data));
    } catch (e) {
      const status = e.response?.status;
      const notFoundMessage = "Tags does not found";
      const message =
        e.response?.data.message === notFoundMessage
          ? notFoundMessage
          : e.message;

      dispatch({ type: "GET_JAR_FAILURE", payload: { status, message } });
    }
  };
};

export const fetchGetJarStatistic = (jarId) => {
  return async (dispatch) => {
    try {
      const response = await getJarStatistic(jarId);

      dispatch(initialJarStatistic(response?.data));
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
