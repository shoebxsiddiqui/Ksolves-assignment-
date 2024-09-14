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

export const chapterReducer = (state = { chapters: [] }, action) => {
  switch (action.type) {
    case CREATE_CHAPTER_REQUEST:
    case GET_CHAPTERS_REQUEST:
    case GET_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        chapters: [...state.chapters, action.payload],
      };
    case GET_CHAPTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        chapters: action.payload,
      };
    case GET_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        chapter: action.payload,
      };
    case CREATE_CHAPTER_FAIL:
    case GET_CHAPTERS_FAIL:
    case GET_CHAPTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
