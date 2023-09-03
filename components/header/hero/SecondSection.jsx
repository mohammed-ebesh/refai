import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Tb24Hours } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
function SecondSection() {
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
  return (
    <div className=" m-auto">
      <div className="    flex items-start lg:items-center  justify-start lg:justify-center p-3 flex-wrap">
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
  );
}

export default SecondSection;
