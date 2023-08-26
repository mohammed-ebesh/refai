"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/img/Logo.png";
import { PiBag } from "react-icons/pi";

function Nav({ setShowLogInModal, isLogin, setIsLogin }) {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-[#191919] p-3">
      <div className="container m-auto">
        <div className=" flex gap-10  justify-between items-center">
          <div className="relative w-[78.59px] h-[91.44px] ">
            <Image className="object-cover" fill src={Logo} alt="Logo" />
          </div>

          <div className="flex items-center gap-3">
            {isLogin ? null : (
              <div className="relative cursor-pointer">
                <PiBag className="text-[#A6A6A6] text-[40px]" />
                <div className="bg-[#FB5A5A] rounded-full w-[20px] h-[20px] flex items-center justify-center text-white text-[10px] absolute top-[-8px] left-[-8px]">
                  {count}
                </div>
              </div>
            )}

            {isLogin ? (
              <div
                onClick={() => setIsLogin(false)}
                className="text-white cursor-pointer"
              >
                تسجيل الخروج
              </div>
            ) : (
              <div
                onClick={() => setShowLogInModal(true)}
                className="text-white cursor-pointer"
              >
                تسجيل الدخول
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
