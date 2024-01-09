import { initialJar } from './jar.slice'
import { api } from "../../axios/axios"


const getJarById = (jarId) => {
  return api.get(`/jars/${jarId}/`)
}


export const fetchGetJarById = (jarId) => {
    return async (dispatch) => {
      try {
        const response = await getJarById(jarId);
  
        dispatch(initialJar(response?.data));
      } catch (e) {
        const status = e.response?.status;
        const notFoundMessage = 'Jar does not found for user';
        const message =
          e.response?.data.message === notFoundMessage
            ? notFoundMessage
            : e.message;

        dispatch({ type: 'GET_JAR_FAILURE', payload: { status, message } });
      }
    };
  };