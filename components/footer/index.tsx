import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function index() {
  const date = new Date();
  const year = date.getFullYear();
  const socialMedia = [
    {
      img: <AiFillFacebook />,
      link: "https://www.facebook.com/alrefai.roastery",
    },
    {
      img: <AiFillInstagram />,
      link: "https://www.instagram.com/alrefai.roastery/",
    },
    {
      img: <IoLogoWhatsapp />,
      link: "https://api.whatsapp.com/send/?phone=%2B201200084002&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <footer className="bg-[#191919] p-5   text-white">
      <div className="container m-auto">
        <div className="flex gap-3 items-center">
          <div className="text-[25px]">تابعنا</div>
          <div className="flex gap-3 text-[30px]">
            {socialMedia.map((i, index) => (
              <div key={i.link}>
                <a target="_blank" href={i.link}>
                  <div>{i.img}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          جميع الحقوق محفوظة © محمة الرفاعي {year}
        </div>
      </div>
    </footer>
  );
}

export default index;
