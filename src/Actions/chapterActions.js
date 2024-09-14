// Actions/chapterActions.js
import {
  CREATE_CHAPTER_REQUEST,
  CREATE_CHAPTER_SUCCESS,
  CREATE_CHAPTER_FAIL,
  GET_CHAPTERS_REQUEST,
  GET_CHAPTERS_SUCCESS,
  GET_CHAPTERS_FAIL,
  GET_CHAPTER_REQUEST,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_FAIL,
} from "../Constants/chapterConstants";
import axios from "axios";

import { DB_URL } from "../Constants/database";

// Create Chapter
export const createChapter = (chapterData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CHAPTER_REQUEST });

    const { data } = await axios.post(`${DB_URL}/api/v1/chapter`, chapterData);

    dispatch({
      type: CREATE_CHAPTER_SUCCESS,
      payload: data.chapter,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CHAPTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Chapters
export const getChapters = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CHAPTERS_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/chapter`);

    dispatch({
      type: GET_CHAPTERS_SUCCESS,
      payload: data.chapters,
    });
  } catch (error) {
    dispatch({
      type: GET_CHAPTERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Chapter By Id
export const getChapterById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CHAPTER_REQUEST });

    const { data } = await axios.get(`${DB_URL}/api/v1/chapter/${id}`);

    dispatch({
      type: GET_CHAPTER_SUCCESS,
      payload: data.chapter,
    });
  } catch (error) {
    dispatch({
      type: GET_CHAPTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getChapterByBookId = (bookId) => async (dispatch) => {
  try {
    dispatch({ type: GET_CHAPTERS_REQUEST });

    const { data } = await axios.post(`${DB_URL}/api/v1/book/chapter`, {
      bookId,
    });

    console.log(data);

    dispatch({
      type: GET_CHAPTERS_SUCCESS,
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: GET_CHAPTERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
