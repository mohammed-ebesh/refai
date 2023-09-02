import React from "react";
import dynamic from "next/dynamic";
import { IoIosCloseCircle } from "react-icons/io";

const DynamicMap = dynamic(() => import("../../Map/index"), {
  ssr: false,
});

function Delivery({ setShowModal }) {
  return (
    <div>
      {/*  <IoIosCloseCircle
        onClick={() => {
          setShowModal(false);
        }}
        size="1.8rem"
        className="text-white absolute transition duration-300 top-2 right-2 transform cursor-pointer hover:text-main hover:rotate-180 z-[200000]"
      /> */}
      <DynamicMap />
    </div>
  );
}

export default Delivery;
