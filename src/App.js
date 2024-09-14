import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { loadUser } from "./Actions/userAction.js";
import store from "./store.js";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
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
            <Route exact path="/" element={<Body />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
