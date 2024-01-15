import { api } from "../../axios/axios";
import queryString from "query-string";
import { initialJar } from "./slices/jar.slice";
import { initialJars } from "./slices/jars.slice";
import { initialBanner } from "./slices/banner.slice";
import { initialTags } from "./slices/tags.slice";
import { initialJarStatistic } from "./slices/jarStatistic.slice";

const getJarById = (jarId) => api.get(`jars/${jarId}/`);

const getAllJars = (filtersParams) => {
  return api.get(`/jars?${queryString.stringify(filtersParams)}`);
};

const getJarsForBanner = () => api.get("jars/banner/");

const getAllTags = () => api.get("jars/tags/");

const getJarStatistic = (jarId) => api.get(`jars/${jarId}/statistic/`);

const createNewJar = (data) => api.post("jars/", data);

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

export const fetchCreateNewJar = (data) => {
  return async (dispatch) => {
    try {
      const response = await createNewJar(data);
      
      dispatch(initialJar(response?.data));
    } catch (e) {
      console.log(e)
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
