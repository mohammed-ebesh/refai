"use client";
import Items from "../components/items/card";
import LoginModalFrom from "../components/loginModal/index.js";
import ScrollToTop from "../components/scrollToTop/index";
import SetReceiptType from "../components/SetReceiptTypeModal/index";
import { useState } from "react";
import ExecuteTheRequest from "../components/ExecuteTheRequest/index";
import Layout from "../components/layout";
const Home = () => {
  const [showLoginModal, setShowLogInModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <main style={{ direction: "rtl" }} className="bg-[#f7f7f7] font-display">
      <Layout
        setShowLogInModal={setShowLogInModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      >
        <Items isLogin={isLogin} />
        <LoginModalFrom
          setIsLogin={setIsLogin}
          showModal={showLoginModal}
          setShowModal={setShowLogInModal}
        />
        <ScrollToTop />
        <SetReceiptType />
        <ExecuteTheRequest />
      </Layout>
    </main>
  );
};
export default Home;
