import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";

function Layout({ children, setShowLogInModal, isLogin, setIsLogin }) {
  return (
    <>
      <Header
        setShowLogInModal={setShowLogInModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
