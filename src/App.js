import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { loadUser } from "./Actions/userAction.js";
import store from "./store.js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getClasses } from "./Actions/classAction.js";
import { getBooks } from "./Actions/bookActions.js";
import ProtectedRoute from "./Components/Routes/ProtectedRoute.js";
import Books from "./Components/Books/Books.js";
import Chapters from "./Components/Chapters/Chapters.js";
import Lectures from "./Components/Lectures/Lectures.js";
import Player from "./Components/Player/Player.js";
import { getChapters } from "./Actions/chapterActions.js";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getClasses());
    store.dispatch(getBooks());
    store.dispatch(getChapters());
  }, []);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        theme="light"
        stacked
      />
      <Router>
        <div className="bg-gray-200 !min-w-[1080px]">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            {isAuthenticated && (
              <>
                <Route path="/books" element={<Books />} />
                <Route path="/chapters" element={<Chapters />} />
                <Route path="/lectures" element={<Lectures />} />
                <Route exact path="/vedio" element={<Player />} />
              </>
            )}
            <Route path="*" element={<div>Login First</div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
