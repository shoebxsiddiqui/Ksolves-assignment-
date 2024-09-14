// actions/bookActions.js
import {
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAIL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_FAIL,
} from "../Constants/bookConstants";
import axios from "axios";
import { DB_URL } from "../Constants/database";

// Create Book
export const createBook = (bookData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BOOK_REQUEST });

    const { data } = await axios.post(`${DB_URL}/api/v1/book`, bookData);

    dispatch({
      type: CREATE_BOOK_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Books
export const getBooks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKS_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/book`);

    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Book By Id
export const getBookById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOK_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/book/${id}`);

    dispatch({
      type: GET_BOOK_SUCCESS,
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOK_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getBooksByClassId = (classId) => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKS_REQUEST });

    const { data } = await axios.post(`${DB_URL}/api/v1/class/book`, {
      classId,
    });

    console.log(data);

    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKS_FAIL,
      payload: error.response.data.message,
    });
  }
};
