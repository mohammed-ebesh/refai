import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setShowOrderTypeModal } from "../../../app/rtk/order-slice";
import _objI from "../../../app/utils/_objI";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

function SelectOrderType() {
  const { orderType } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  return (
    <div className="container m-auto my-4 ">
      <div className="mx-2 lg:mx-0">
        <div
          onClick={() => dispatch(setShowOrderTypeModal(true))}
          className="border rounded-md  w-full cursor-pointer p-2 shadow flex justify-end items-center gap-4"
        >
          <div className="text-xs">
            {_objI(orderType) ? (
              <div className=" flex flex-row-reverse items-center gap-4">
                {orderType.type === "branch" ? (
                  <>
                    <CiDeliveryTruck className="text-4xl" />
                    <div>
                      <div>استلام من </div>
                      <div className="font-bold">{orderType.branch} </div>
                    </div>
                  </>
                ) : (
                  <SlHandbag />
                )}
              </div>
            ) : (
              <>
                <div>نوع الطلب</div>
                <div className="font-bold">حدد نوع الطلب</div>
              </>
            )}
          </div>
          {!_objI(orderType) && <BiSolidDownArrow />}
        </div>
      </div>
    </div>
  );
}

export default SelectOrderType;
