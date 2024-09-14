import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../Constants/userConstants";
import axios from "axios";

import { DB_URL } from "../Constants/database";

//Login User
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${DB_URL}/api/v1/user/login`,
      { email, password },
      { withCredentials: true },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message });
  }
};

//Register User
export const register =
  (name, email, password, phone_no) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(
        `${DB_URL}/api/v1/user/register`,
        { name, email, password, phone_no },
        { withCredentials: true },
        config
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/user/me`, {
      withCredentials: true,
    });

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

//Logout User
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${DB_URL}/api/v1/user/logout`, { withCredentials: true });

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
