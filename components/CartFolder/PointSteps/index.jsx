"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assets/img/Logo.png";
function Index({ points, stepCounter, setStepCounter }) {
  return (
    <div>
      <div className="cart-bg p-10 flex justify-center items-center">
        <div className="bg-black rounded-full w-[300px] h-[300px]">
          <div className="flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={250} height={250} />
          </div>
        </div>
      </div>
      <div className="container flex justify-between m-auto mt-5 relative  ">
        <div className="w-full h-[10px]  border-b-2 mt-5"></div>
        <div className="absolute top-[1.2rem] w-full flex justify-around">
          {points.map((i) => (
            <div
              onClick={() => setStepCounter(i.pointNumber)}
              className={`flex flex-col gap-3 items-center cursor-pointer ${
                stepCounter === i.pointNumber ? "font-bold" : ""
              }`}
              key={i.pointNumber}
            >
              <div className=" bg-white w-4 h-4 rounded-full outline-1 outline flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    stepCounter === i.pointNumber
                      ? " bg-green-700"
                      : " bg-slate-500"
                  }`}
                ></div>
              </div>

              <div className="text-[14px] text-[#212529B3]">{i.pointName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
