"use client";
import { useDispatch } from "react-redux";
import { setShowOrderTypeModal, setOrderType } from "../../app/rtk/order-slice";

function ConfirmAddressButton({ canAllowedArea }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        if (canAllowedArea) {
          dispatch(
            setOrderType({
              type: "delivery",
              branch: "dddd",
            })
          );
          dispatch(setShowOrderTypeModal(false));
        }
      }}
      className={`z-[1000] bg-[#191919] absolute bottom-0 w-[100%] hover:bg-[#2e2e2e] p-3 pb-4 text-white text-center font-bold text-xl ${
        canAllowedArea ? "cursor-pointer" : "cursor-not-allowed"
      }  font-display`}
    >
      {canAllowedArea ? "تأكيد العنوان" : "لايوجد توصيل لهذا العنوان"}
    </div>
  );
}

export default ConfirmAddressButton;
