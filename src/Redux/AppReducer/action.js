//Write the ActionCreator functions here
import axios from "axios";

import { GET_WATCHES_DATA_REQUEST } from "./actionType";
import { GET_WATCHES_DATA_SUCCESS } from "./actionType";
import { GET_WATCHES_DATA_FAILURE } from "./actionType";
import { FILTER_WATCH_DATA } from "./actionType";

export const watchDataRequest = () => {
  return {
    type: GET_WATCHES_DATA_REQUEST,
  };
};

export const watchDataSuccess = (data) => {
  return {
    type: GET_WATCHES_DATA_SUCCESS,
    payload: data,
  };
};

export const watchDataFailure = (error) => {
  return {
    type: GET_WATCHES_DATA_FAILURE,
    payload: error,
  };
};

export const filteredData = (data) => {
  return {
    type: FILTER_WATCH_DATA,
    payload: data,
  };
};

export const getData = (category) => (dispatch) => {
  
  console.log(category)

  dispatch(watchDataRequest());

  const apiURL =
    category !== undefined
      ? `http://localhost:8080/watches?category=${category}`
      : `http://localhost:8080/watches`;
 
      console.log(apiURL)

  axios
    .get(apiURL)
    .then((res) => dispatch(watchDataSuccess(res.data)))
    .catch((error) => dispatch(watchDataFailure(error.message)));
};
