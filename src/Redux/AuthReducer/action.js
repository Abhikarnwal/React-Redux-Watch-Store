//Write the ActionCreator functions here

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const login = ({ email, password }) => (dispatch) => { 
  
  dispatch(loginRequest());

    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => dispatch(loginSuccess(res.data.token)))
    .catch((error) =>dispatch( loginFailure(error.message)));
  };
