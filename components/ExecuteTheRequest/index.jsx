"use client";
import { useDispatch, useSelector } from "react-redux";
import { PiBag } from "react-icons/pi";
function ExecuteTheRequest() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {cart.length > 0 && (
        <div className="fixed bottom-0 cursor-pointer gap-3 w-full flex flex-row-reverse items-center justify-center duration-75 hover:bg-[#292828] lg:hidden bg-[#191919] py-5 z-[400] text-white">
          <div className="text-xl">تنفيذ الطلب</div>
          <div className="relative">
            <PiBag className="text-white text-[40px]" />
            <div className="bg-[#FB5A5A]  rounded-full w-[20px] h-[20px] font-bold flex items-center justify-center text-white text-[10px] absolute top-[-8px] left-[-8px]">
              {cart.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExecuteTheRequest;
