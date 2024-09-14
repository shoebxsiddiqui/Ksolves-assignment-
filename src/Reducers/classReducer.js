// reducers/classReducer.js
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
  CLEAR_ERRORS,
} from "../Constants/classConstants";

export const classReducer = (state = { classes: [], class: {} }, action) => {
  console.log("Hi");
  switch (action.type) {
    case CREATE_CLASS_REQUEST:
    case GET_CLASSES_REQUEST:
    case GET_CLASS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: [...state.classes, action.payload], // Add the newly created class
      };
    case GET_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload,
      };
    case GET_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        class: action.payload,
      };
    case CREATE_CLASS_FAIL:
    case GET_CLASSES_FAIL:
    case GET_CLASS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
