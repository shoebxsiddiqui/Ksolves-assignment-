import React from "react";
import LoginSignUp from "./LoginSignUp";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-around bg-blue-600 h-14">
      <div>
        <img
          className="img"
          src="https://www.ksolves.com/wp-content/uploads/ksLogo.svg"
          alt="logo"
        />
      </div>
      <div>
        <LoginSignUp />
      </div>
    </div>
  );
};

export default Header;
