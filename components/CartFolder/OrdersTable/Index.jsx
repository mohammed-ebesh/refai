import React from "react";
import {
  emptyCart,
  increment,
  decrement,
  removeItem,
} from "@/app/rtk/products-slice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
function Index() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const TotalPizzaPrice = () => {
    let price = 0;
    cart.cart.forEach((item) => {
      price += item.lastPrice;
    });
    return price;
  };

  return (
    // left Side
    <div className="container py-16 m-auto">
      <div className="">
        <div className="flex justify-between ">
          <div className="w-[75%]">
            <div className="flex flex-col ">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light border ">
                      <thead className="border-b font-medium dark:border-neutral-500 bg-[#E9ECEF]">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            المنتج
                          </th>
                          <th scope="col" className="px-6 py-4">
                            الكمية
                          </th>
                          <th scope="col" className="px-6 py-4">
                            الاجمالي
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((i, index) => (
                          <tr
                            clclassNameass="border-b dark:border-neutral-500"
                            key={index + Math.random}
                          >
                            <td className="whitespace-nowrap px-6 py-4">
                              {i.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {i.unit}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {i.price}ج.م
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-2 w-[24%] p-8 mt-2">
            <div className=" border-b-2 w-full text-left text-xl">
              <p className=" mb-4">إجمالي الطلب </p>
            </div>
            <div className="flex items-center justify-between p-3 text-[#212529B3] text-[15px]">
              <p>التوصيل:</p>
              <p>25.00 ج.م</p>
            </div>
            <div className="flex items-center justify-between p-3 text-[#212529] text-[15px]">
              <p>الإجمالي الفرعي:</p>
              <p>210ج.م</p>
            </div>
            <div className="flex items-center justify-between p-3 text-[#212529] text-[15px] border-b">
              <p>الضرائب :</p>
              <p>40ج.م</p>
            </div>
            <div className="flex items-center justify-between p-3 text-[#212529] text-[17px] border-b font-bold">
              <p>الإجمالي:</p>
              <p>310ج.م</p>
            </div>
            <div className="p-4">
              <p className=" text-[#FF0000] text-[15px] font-bold p-2">
                ملاحظات العميل:
              </p>
              <p className="text-[#FF0000] text-[15px] text-center p-2">
                لا يوجد ملاحظات
              </p>
              <button className=" bg-[#2A7037] text-white p-[7px] mt-2 rounded-sm text-[14px]">
                أضف ملاحظة
              </button>
            </div>
            <div className="text-left">
              <p className="text-[#2A7037]">لدي كود ترويجي</p>
              <button className=" bg-[#1D4C27] text-white p-[7px] mt-6 rounded-sm text-[14px]">
                معالجة الدفع والخروج
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // Right Side
  );
}

export default Index;
