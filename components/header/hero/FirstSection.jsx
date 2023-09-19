"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/img/Logo.png";
function FirstSection() {
  /*  const arr = [
    {
      title: "تأسست عام 2017 من قبل الرفاعي",
    },
    {
      title: "تأسست عام 2017 من قبل الرفاعي",
    },
  ]; */
  /*   const [description, setDiscription] = useState(arr[0]); */
  return (
    <div className="flex items-center justify-center bg-black mb-5 p-10">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[146px] h-[170px]">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="text-white md:text-[50px] text-[30px] lg:text-[70px] font-bold">
          محمصات الرفاعي
        </div>
        {/*   <div className="text-white text-[20px]">{description.title}</div> */}
      </div>
    </div>
  );
}

export default FirstSection;
