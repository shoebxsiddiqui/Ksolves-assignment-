import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { classReducer } from "./Reducers/classReducer";
import { userReducer } from "./Reducers/userReducer";
import { bookReducer } from "./Reducers/bookReducer";
import { chapterReducer } from "./Reducers/chapterReducers";
// import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  user: userReducer,
  class: classReducer,
  book: bookReducer,
  chapters: chapterReducer,
});

let initialState = {
  //   cart: {
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     shippingInfo: localStorage.getItem("shippingInfo")
  //       ? JSON.parse(localStorage.getItem("shippingInfo"))
  //       : {},
  //   },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
