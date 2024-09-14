// reducers/bookReducer.js
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

export const bookReducer = (state = { books: [], book: {} }, action) => {
  switch (action.type) {
    case CREATE_BOOK_REQUEST:
    case GET_BOOKS_REQUEST:
    case GET_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload], // Add newly created book to list
      };

    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload, // Set fetched books
      };

    case GET_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload, // Set fetched book
      };

    case CREATE_BOOK_FAIL:
    case GET_BOOKS_FAIL:
    case GET_BOOK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload, // Set error if something went wrong
      };

    default:
      return state;
  }
};
