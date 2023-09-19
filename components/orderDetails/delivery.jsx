"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCheck } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

import {
  removeItem,
  increment,
  decrement,
  weightAdjustment,
} from "../../app/rtk/products-slice";
function Index() {
  const { cart } = useSelector((state) => state.cart);
  const router = useRouter();
  const dispatch = useDispatch();
  const [paymentType, setPaymentType] = useState("cash");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (cart.length < 0) {
      router.push("/");
    }
  });

  const sum = cart?.reduce?.((accumulator, object) => {
    return accumulator + Number(object.lastPrice);
  }, 0);

  const onSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
    console.log({
      clientName: clientName,
      clintPhone: clientPhone,
      total: sum,
      paymentType: paymentType === "cash" ? "كاش" : "فيزا",
      notes: notes ? notes : "لايوجد ملاحظات",
      items: [...cart],
      address: address,
    });
  };

  return (
    <div
      dir="rtl"
      className="container mx-auto my-5 font-display text-lg select-none "
    >
      <form onSubmit={onSubmit}>
        <div className="mx-2 md:mx-0">
          <div className="font-bold flex items-center gap-2 my-6">
            <div
              onClick={() => router.push("/")}
              className="bg-[#191919] hover:bg-[#353535] cursor-pointer text-white p-2 rounded-md"
            >
              <IoIosArrowForward />
            </div>
            <div>مراجعة الطلب</div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="flex gap-4">
              <input
                name="clientName"
                type="text"
                onChange={(e) => setClientName(e.target.value)}
                required={true}
                placeholder="الإسم"
                className=" border border-gray-300 text-gray-900 sm:text-sm   rounded-md w-full p-2.5 "
              />
              <input
                type="string"
                pattern="^01[0-2]\d{1,8}$"
                required={true}
                onChange={(e) => setClientPhone(e.target.value)}
                name="clientNumber"
                placeholder="رقم الموبايل"
                className=" border border-gray-300 text-gray-900 sm:text-sm   rounded-md w-full p-2.5 "
              />
            </div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="flex gap-4  text-md font-bold">
              <>
                <CiDeliveryTruck className="text-3xl" />
                <div>التوصيل الى </div>
              </>
            </div>
            <div className=" rounded-md mb-4">
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-md p-3 text-sm mt-2"
                name="address"
                placeholder="تفاصيل العنوان"
              />
            </div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="flex gap-4  text-md ">
              <>
                <CiClock2 className="text-3xl font-bold" />
                <div>التوصيل في خلال 60 دقيقة</div>
              </>
            </div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            {cart.map((item) => (
              <>
                <div className="flex justify-between  ">
                  <div className="flex gap-3 font-bold">
                    <div className="relative   flex h-[100px] overflow-hidden ">
                      <Image
                        className="object-cover"
                        src="https://static.webteb.net/images/content/tbl_articles_article_15381_526d07634dd-b54a-43bc-9470-1e48cade4db9.jpg"
                        alt="product image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>{item.name}</div>
                  </div>
                  <div className="text-[#C0533A]">{item.lastPrice}ج.م</div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  {item.unit === "كيلوجرام" ? (
                    <div className="flex gap-3 items-center">
                      <div>
                        <select
                          onChange={(e) =>
                            dispatch(
                              weightAdjustment({
                                id: item.id,
                                quantity: e.target.value,
                              })
                            )
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                          defaultValue={"1"}
                          name="cars"
                          id="cars"
                        >
                          <option value="0.1">100 جرام</option>
                          <option value="0.25">250 جرام</option>
                          <option value="0.5">500 جرام</option>
                          <option value="1">1 كيلوجرام</option>
                          <option value="1.100">1.100 كيلوجرام</option>
                          <option value="1.250">1.250 كيلوجرام</option>
                          <option value="1.500">1.500 كيلوجرام</option>
                          <option value="1.750">1.750 كيلوجرام</option>
                          <option value="2">2 كيلوجرام</option>
                          <option value="2.100">2.100 كيلوجرام</option>
                          <option value="2.250">2.250 كيلوجرام</option>
                          <option value="2.500">2.500 كيلوجرام</option>
                          <option value="2.750">2.750 كيلوجرام</option>
                          <option value="3">3 كيلوجرام</option>
                          <option value="3.100">3.100 كيلوجرام</option>
                          <option value="3.250">3.250 كيلوجرام</option>
                          <option value="3.500">3.500 كيلوجرام</option>
                          <option value="3.750">3.750 كيلوجرام</option>
                          <option value="4">4 كيلوجرام</option>
                          <option value="4.100">4.100 كيلوجرام</option>
                          <option value="4.250">4.250 كيلوجرام</option>
                          <option value="4.500">4.500 كيلوجرام</option>
                          <option value="4.750">4.750 كيلوجرام</option>
                          <option value="5">5 كيلوجرام</option>
                        </select>
                      </div>
                      <div
                        onClick={() => dispatch(removeItem(item.id))}
                        className="bg-[#DC3545] text-white flex justify-center items-center w-[30px] h-[30px] rounded-md cursor-pointer opacity-80 hover:opacity-100 "
                      >
                        <BsFillTrash3Fill />
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <div
                        onClick={() => dispatch(increment(item.id))}
                        className="bg-[#191919] text-white flex line justify-center items-center 	 w-[30px] h-[30px] rounded-md cursor-pointer opacity-80 hover:opacity-100 "
                      >
                        <AiOutlinePlus />
                      </div>
                      <div className="w-[15px] text-center">
                        {item.quantity}
                      </div>
                      <div
                        onClick={() => dispatch(decrement(item.id))}
                        className="bg-[#191919] text-white flex justify-center items-center 	 w-[30px] h-[30px] rounded-md cursor-pointer opacity-80 hover:opacity-100 "
                      >
                        <AiOutlineMinus />
                      </div>
                      <div
                        onClick={() => dispatch(removeItem(item.id))}
                        className="bg-[#DC3545] text-white flex justify-center items-center w-[30px] h-[30px] rounded-md cursor-pointer opacity-80 hover:opacity-100 "
                      >
                        <BsFillTrash3Fill />
                      </div>
                    </div>
                  )}
                </div>
                <hr className="mt-3 mb-3" />
              </>
            ))}
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="font-bold">ملاحظات</div>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded-md p-3 text-sm mt-2"
              name="address"
              placeholder="هل لديك ملاحظات خاصة على الطلب ؟"
            />
          </div>
          <div className="border p-4 rounded-md mb-4 ">
            <div className="font-bold">تفاصيل الدفع</div>

            <div className="flex mt-2 justify-between text-[#afadad] text-sm">
              <div>المجموع الفرعي</div>
              <div>{sum} ج.م</div>
            </div>
            <div className="flex mt-2 justify-between text-[#afadad] text-sm">
              <div>خدمة التوصيل</div>
              <div>0 ج.م</div>
            </div>
            <hr className="my-4" />
            <div className="flex items-end justify-between text-[#afadad] text-sm">
              <div>
                <div className="text-black text-lg mb-2 font-bold">
                  المجموع الكلي
                </div>
              </div>
              <div className="text-black font-bold">{sum} ج.م</div>
            </div>
          </div>
          <div className="border p-4 rounded-md mb-4">
            <div className="font-bold mb-2">طريقة الدفع</div>
            <div
              onClick={() => setPaymentType("cash")}
              className="flex justify-between cursor-pointer"
            >
              <div className="flex gap-4  text-md">
                <BsCash className="text-3xl" />
                <div>نقدا</div>
              </div>
              <div className="w-6 h-6 flex justify-center items-center bg-neutral-500 rounded-md  text-white">
                {paymentType === "cash" && <AiOutlineCheck />}
              </div>
            </div>
            <hr className="my-2" />
            <div
              onClick={() => setPaymentType("visa")}
              className="flex justify-between  cursor-pointer "
            >
              <div className="flex gap-4  text-md ">
                <FaCcVisa className="text-3xl" />
                <div>فيزا كارد</div>
              </div>
              <div className="w-6 h-6 flex justify-center items-center bg-neutral-500 rounded-md  text-white">
                {paymentType === "visa" && <AiOutlineCheck />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 mx-2 md:mx-0">
          <button
            type="submit"
            className="w-full md:w-[75%] lg:w-[50%] p-4 rounded-md mb-4 bg-[#DC3545] text-white flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100"
          >
            تنفيذ الطلب
          </button>
        </div>
      </form>
    </div>
  );
}

export default Index;
