"use client";
import PointSteps from "../../components/CartFolder/PointSteps/index";
import FirstStep from "../../components/CartFolder/FirstStep/Index";
import SecondStep from "../../components/CartFolder/SecondStep/Index";
import ThirdsStep from "../../components/CartFolder/ThirdStep/Index";
import { useState } from "react";
function Cart() {
  const points = [
    { pointNumber: 1, pointName: "مراجعة الطلب" },
    { pointNumber: 2, pointName: "العنوان" },
    { pointNumber: 3, pointName: "تأكيد الطلب" },
  ];
  const [stepCounter, setStepCounter] = useState(1);

  return (
    <>
      <main style={{ direction: "rtl" }} className="font-display">
        <PointSteps
          points={points}
          stepCounter={stepCounter}
          setStepCounter={setStepCounter}
        />
        {stepCounter === 1 && <FirstStep />}
        {stepCounter === 2 && <SecondStep />}
        {stepCounter === 3 && <ThirdsStep />}
      </main>
    </>
  );
}

export default Cart;
