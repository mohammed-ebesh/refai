import React from "react";
import Navbar from "./navBar/index";
import Hero from "./hero/index";

function Header({ setShowLogInModal, isLogin, setIsLogin }) {
  return (
    <>
      <Navbar
        setShowLogInModal={setShowLogInModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Hero />
    </>
  );
}

export default Header;
