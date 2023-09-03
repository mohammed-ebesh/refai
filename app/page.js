"use client";
import Header from "../components/header/index";
import Items from "../components/items/card";
import Footer from "../components/footer/index";
import LoginModalFrom from "../components/loginModal/index.js";
import ScrollToTop from "../components/scrollToTop/index";
import SetReceiptType from "../components/SetReceiptTypeModal/index";
import { useState } from "react";
import ExecuteTheRequest from "../components/ExecuteTheRequest/index";
const Home = () => {
  const [showLoginModal, setShowLogInModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main style={{ direction: "rtl" }} className="bg-[#f7f7f7] font-display">
      <Header
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        setShowLogInModal={setShowLogInModal}
      />
      <Items isLogin={isLogin} />
      <Footer />
      <LoginModalFrom
        setIsLogin={setIsLogin}
        showModal={showLoginModal}
        setShowModal={setShowLogInModal}
      />
      <ScrollToTop />
      <SetReceiptType />
      <ExecuteTheRequest />
    </main>
  );
};
export default Home;
