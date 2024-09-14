import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  register,
  logout,
  clearErrors,
} from "../../Actions/userAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setNumber] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      toast.success("Logged in successfully");
      setOpen(false);
    }
  }, [dispatch, error, isAuthenticated]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, phone_no));
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    dispatch(logout());
    setEmail("");
    setPassword("");
    toast.success("Logout successfully");
  };

  return (
    <>
      <div>
        {isAuthenticated ? (
          <button
            onClick={logoutHandler}
            className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleOpen}
            className="w-28 h-7 bg-gray-50 mt-3.5 rounded border-none text-blue-800 font-sans font-semibold"
          >
            Login
          </button>
        )}
      </div>
      {!isAuthenticated ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {login ? (
            <Box
              className="w-5/12 h-[75%] flex min-w-[600px] min-h-[400px]"
              sx={style}
            >
              <div className="grid grid-cols-5 grid-flow-row h-full">
                <div
                  style={{
                    backgroundImage:
                      "url('https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png')",
                    backgroundPosition: "center 85%",
                  }}
                  className="flex flex-col bg-no-repeat bg-[#2874f0] p-8 text-white col-span-2"
                >
                  <h2 className="font-medium text-[28px] mb-5">Login</h2>
                  <p className="text-lg text-[#dbdbdb]">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
                <div className="flex flex-col col-span-3 p-8">
                  <TextField
                    type="email"
                    className="w-full"
                    id="standard-basic"
                    label="Enter Email"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    type="password"
                    className="w-full"
                    id="standard-basic"
                    label="Enter Password"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs text-gray-600 mt-10">
                    By continuing, you agree to Flipkart's{" "}
                    <span className="text-blue-600">Terms of Use</span> and{" "}
                    <span className="text-blue-600">Privacy Policy</span>.
                  </p>
                  <button
                    className="bg-[#fb641b] w-full p-3 rounded-sm mt-5 text-white font-medium text-base"
                    onClick={loginHandler}
                  >
                    Login
                  </button>
                  <button
                    className="mt-auto text-blue-600 text-sm font-medium"
                    onClick={() => setLogin(false)}
                  >
                    New to Flipkart? Create an account
                  </button>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="absolute -right-5 -top-2 text-2xl text-white"
              >
                X
              </button>
            </Box>
          ) : (
            <>
              <Box
                className="w-5/12 h-[75%] flex min-w-[600px] min-h-[400px]"
                sx={style}
              >
                <div className="grid grid-cols-5 grid-flow-row h-full">
                  <div
                    style={{
                      backgroundImage:
                        "url('https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png')",
                      backgroundPosition: "center 85%",
                    }}
                    className="flex flex-col bg-no-repeat bg-[#2874f0] p-8 text-white col-span-2"
                  >
                    <h2 className="font-medium text-[28px] mb-5">Register</h2>
                    <p className="text-lg text-[#dbdbdb]">
                      Get access to your Orders, Wishlist and Recommendations
                    </p>
                  </div>
                  <div className="flex flex-col col-span-3 p-8">
                    <TextField
                      type="name"
                      value={name}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Full Name"
                      variant="standard"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      type="email"
                      value={email}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Email"
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      type="password"
                      value={password}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Password"
                      variant="standard"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                      type="Number"
                      value={phone_no}
                      className="w-full"
                      id="standard-basic"
                      label="Enter Phone Number"
                      variant="standard"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <p className="text-xs text-gray-600 mt-10">
                      By continuing, you agree to Flipkart's{" "}
                      <span className="text-blue-600">Terms of Use</span> and{" "}
                      <span className="text-blue-600">Privacy Policy</span>.
                    </p>
                    <button
                      className="bg-[#fb641b] w-full p-3 rounded-sm mt-5 text-white font-medium text-base"
                      onClick={registerHandler}
                    >
                      Register
                    </button>
                    <button
                      className="mt-auto text-blue-600 text-sm font-medium"
                      onClick={() => setLogin(true)}
                    >
                      Already have an account? SignIn
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="absolute -right-5 -top-2 text-2xl text-white"
                >
                  X
                </button>
              </Box>
            </>
          )}
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  zIndex: 1,
};

export default LoginSignUp;
