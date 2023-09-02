"use client";
import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../app/firebase";
import Loader from "../../assets/img/loader.svg";
import Image from "next/image";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import DeleteModal from "../deleteModal/index";
import EditItemModal from "../editModal/index";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddItemMolad from "../addItemsModal/index";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "@/app/rtk/products-slice";
import _objI from "../../app/utils/_objI";
import { setShowOrderTypeModal } from "../../app/rtk/order-slice";

function Card({ isLogin }) {
  const [items, setItems] = useState([]);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { orderType } = useSelector((state) => state.order);
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    const q = query(collection(db, "items"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemsArr = [];

      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...doc.data(), id: doc.id });
      });
      setItems(itemsArr);

      return () => unsubscribe();
    });
  }, []);
  useEffect(() => {
    const q = query(collection(db, "categories"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let cat = [];

      querySnapshot.forEach((doc) => {
        cat.push({ ...doc.data(), id: doc.id });
      });
      setCategories(cat?.[0]?.cat);
      return () => unsubscribe();
    });
  }, []);

  const percentageOff = (price, percentageValue) => {
    return price * (1 - percentageValue / 100);
  };

  return (
    <>
      <div className="container select-none m-auto my-5">
        {isLogin && (
          <div className="flex items-center justify-center text-lg  ">
            <div
              onClick={() => setShowAddItemModal(true)}
              className="rounded-md cursor-pointer border p-2  flex gap-2 items-center mb-4"
            >
              <IoMdAddCircleOutline className="text-[#547445]" />
              <div className="font-bold text-neutral-600">إضافة صنف </div>
            </div>
          </div>
        )}

        {items.length === 0 ? (
          <div className="my-[7rem] flex items-center justify-center">
            <Image src={Loader} alt="loader" />
          </div>
        ) : (
          <div className="grid justify-center grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items?.map?.((item) => (
              <div
                key={item.name + item.price}
                className="relative  flex w-full max-w-xs flex-col overflow-hidden duration-75  border border-gray-100 bg-white hover:shadow-md"
              >
                {item.withSale && (
                  <div className="absolute font-bold opacity-95 py-1 top-9 right-[-45px] text-center text-lg text-white w-[70%] z-[2] rotate-45 bg-[#C0533A]">
                    {"خصم" + " " + item.salePercentage + "%" ?? ""}
                  </div>
                )}
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden ">
                  <Image
                    className="object-cover"
                    src="https://static.webteb.net/images/content/tbl_articles_article_15381_526d07634dd-b54a-43bc-9470-1e48cade4db9.jpg"
                    alt="product image"
                    width={500}
                    height={500}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900 ">
                      {item.withSale ? (
                        <span>
                          {item.name}{" "}
                          <span className="line-through">
                            {item.price + "ج.م"}
                          </span>
                        </span>
                      ) : (
                        <span> {item.name}</span>
                      )}
                    </h5>
                  </a>
                  <div className="mt-2 mb-2 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        <span>
                          {item.withSale
                            ? percentageOff(
                                Number(item.price),
                                Number(item.salePercentage)
                              )
                            : item.price}
                        </span>
                        <span>ج.م</span>/{" "}
                        <span className="text-[1rem]">{item.unit}</span>
                      </span>
                    </p>
                  </div>
                  {isLogin ? (
                    <div className="flex  text-lg gap-2 items-center justify-between font-bold">
                      <div
                        onClick={() => {
                          setItemData(item);
                          setShowEditItemModal(true);
                        }}
                        className="flex justify-center items-center gap-2 w-[110px] cursor-pointer border p-1 rounded-md hover:shadow-md"
                      >
                        <AiOutlineEdit className="text-[#547445]" />
                        <div>تعديل</div>
                      </div>
                      <div
                        onClick={() => {
                          setItemData(item);
                          setShowDeleteModal(true);
                        }}
                        className="flex items-center justify-center gap-2 w-[110px] cursor-pointer border p-1 rounded-md  hover:shadow-md"
                      >
                        <AiOutlineDelete className="text-[#C0533A]" />
                        <div>حذف</div>
                      </div>
                    </div>
                  ) : (
                    <a
                      onClick={() => {
                        if (
                          cart?.filter?.((i) => i.name == item.name).length > 0
                        ) {
                          dispatch(removeItem(item.id));
                        } else {
                          if (_objI(orderType)) {
                            dispatch(
                              addToCart({
                                id: item.id,
                                price: item.price,
                                name: item.name,
                                lastprice: item.price,
                                quantity: item.qnty,
                                lastPrice: item.price,
                              })
                            );
                          } else {
                            dispatch(setShowOrderTypeModal(true));
                          }
                        }
                      }}
                      className="flex select-none items-center cursor-pointer gap-3 justify-center rounded-md bg-[#191919] hover:bg-[#292828] px-5 py-2.5 text-center text-sm font-medium text-white  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {cart?.filter?.((i) => i.name == item.name).length > 0 ? (
                        <span>إزالة من السلة</span>
                      ) : (
                        <span>إضافة الى السلة</span>
                      )}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <EditItemModal
        categories={categories}
        showModel={showEditItemModal}
        setShowModel={setShowEditItemModal}
        item={itemData}
        setItemData={setItemData}
      />
      <DeleteModal
        showModel={showDeleteModal}
        setShowModel={setShowDeleteModal}
        item={itemData}
      />
      <AddItemMolad
        categories={categories}
        showModel={showAddItemModal}
        setShowModel={setShowAddItemModal}
      />
    </>
  );
}

export default Card;
