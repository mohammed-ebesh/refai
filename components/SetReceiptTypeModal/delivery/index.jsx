import React from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../../Map/index"), {
  ssr: false,
});

function Delivery() {
  return <DynamicMap />;
}

export default Delivery;
