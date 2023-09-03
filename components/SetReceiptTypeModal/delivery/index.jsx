import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../../Map/index"), {
  ssr: false,
});

function Delivery({ setShowModal }) {
  return (
    <div>
      <DynamicMap />
    </div>
  );
}

export default Delivery;
