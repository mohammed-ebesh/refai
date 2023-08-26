"use client";
import React, { useState } from "react";
import Modal from "../modal/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../app/firebase";

const Index = ({ showModal, setShowModal, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage("تم تسجيل الدخول ");
        setShowModal(false);
        setIsLogin(true);
        setMessage("");
      })
      .catch((error) => {
        setMessage("الإيميل أو كلمة المرور خاطئة");
      });
  };

  const handleInputChange = () => {
    setMessage("");
  };
  return (
    <div>
      <Modal
        width="w-[500px]"
        show={showModal}
        onClose={(e) => {
          setShowModal(false);
        }}
      >
        <div className="font-bold text-lg">تسجيل الدخول</div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div className="my-3">
            <label className="block mb-2  font-medium text-gray-900 text-md">
              الإيميل
            </label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange();
              }}
              required
              className=" border border-gray-300 text-gray-900 sm:text-sm   block w-full p-2.5 "
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-md font-medium text-gray-900 ">
              كلمة السر
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleInputChange();
              }}
              required
              className=" border border-gray-300 text-gray-900 sm:text-sm   f block w-full p-2.5 "
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#191919] hover:bg-[#2e2e2e]    font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            تسجيل الدخول
          </button>
          <div className="text-gray-900 flex items-center justify-center font-bold ">
            {message}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Index;
