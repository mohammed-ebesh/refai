import React from "react";
import Navbar from "./navBar/index";
import Hero from "./hero/index";
import OrderType from "./SelectOrderType/index";

function Header({
  setShowLogInModal,
  isLogin,
  setIsLogin,
  showJustNav = false,
}) {
  return (
    <>
      <Navbar
        setShowLogInModal={setShowLogInModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      {!showJustNav && (
        <>
          <OrderType />
          <Hero />
        </>
      )}
    </>
  );
}

export default Header;
