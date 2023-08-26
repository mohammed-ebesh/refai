"use client";
import Header from "../components/header/index";
import Items from "../components/items/card";
import Footer from "../components/footer/index";
import LoginModalFrom from "../components/loginModal/index.js";
import ScrollToTop from "../components/scrollToTop/index";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";
export default function Home() {
  const [isOpenForChipping, seIsOpenForChipping] = useState(true);
  useEffect(() => {
    const q = query(collection(db, "isOpenForChipping"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      seIsOpenForChipping(itemsArr[0].open);
      console.log(isOpenForChipping);
      return () => unsubscribe();
    });
  }, []);
  const [showLoginModal, setShowLogInModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <main style={{ direction: "rtl" }} className="bg-[#f7f7f7] ">
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
    </main>
  );
}