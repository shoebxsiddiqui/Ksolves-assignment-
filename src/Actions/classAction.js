// actions/classActions.js
import {
  CREATE_CLASS_REQUEST,
  CREATE_CLASS_SUCCESS,
  CREATE_CLASS_FAIL,
  GET_CLASSES_REQUEST,
  GET_CLASSES_SUCCESS,
  GET_CLASSES_FAIL,
  GET_CLASS_REQUEST,
  GET_CLASS_SUCCESS,
  GET_CLASS_FAIL,
} from "../Constants/classConstants";
import axios from "axios";

import { DB_URL } from "../Constants/database";

// Create Class
export const createClass = (classData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CLASS_REQUEST });

    const { data } = await axios.post(`${DB_URL}/api/v1/class`, classData);

    dispatch({
      type: CREATE_CLASS_SUCCESS,
      payload: data._class,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Classes
export const getClasses = () => async (dispatch) => {
  try {
    console.log("Hi");
    dispatch({ type: GET_CLASSES_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/class`);
    console.log(data);
    dispatch({
      type: GET_CLASSES_SUCCESS,
      payload: data.classes,
    });
  } catch (error) {
    dispatch({
      type: GET_CLASSES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Class By Id
export const getClassById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CLASS_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/class/${id}`);

    dispatch({
      type: GET_CLASS_SUCCESS,
      payload: data._class,
    });
  } catch (error) {
    dispatch({
      type: GET_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};
