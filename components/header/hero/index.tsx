"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../assets/img/Logo.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Tb24Hours } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
function Index() {
  const arr = [
    {
      title: "تأسست عام 2017 من قبل الرفاعي",
    },
    {
      title: "تأسست عام 2017 من قبل الرفاعي",
    },
  ];

  const data = [
    {
      title: "سرعة في التوصيل",
      discription: "إحصل على طلبك في أسرع وقت",
      img: <FaShippingFast />,
    },
    {
      title: "عروض وتخفيضات",
      discription: "إستمتع مع عروض وتخفيضات الرفاعي",
      img: <AiOutlineDollarCircle />,
    },
    {
      title: "دعم عبر الإنترنت 24/7 ",
      discription: "دعم الشكاوي والإستفسارات يوميا",
      img: <Tb24Hours />,
    },
    {
      title: "دفع امن",
      discription: "طرق دفع آمنة للمستخدم",
      img: <MdSecurity />,
    },
  ];

  const [description, setDiscription] = useState<any>(arr[0]);

  return (
    <div className="bg-[#f7f7f7]">
      <div className=" m-auto">
        <div className="    flex sm:items-start md:items-center  sm:justify-start md:justify-center p-3 flex-wrap">
          {data.map((i) => (
            <div className="flex gap-2 items-center  p-3 " key={i.discription}>
              <div className="text-[#846D31] text-[35px]">{i.img}</div>
              <div>
                <div className="text-[#846D31] font-bold">{i.title}</div>
                <div>{i.discription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center bg-black mb-5 p-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[146px] h-[170px]">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="text-white md:text-[50px] text-[30px] lg:text-[70px] font-bold">
            محمصات الرفاعي
          </div>
          <div className="text-white text-[20px]">{description.title}</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
