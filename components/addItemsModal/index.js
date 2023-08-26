"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Modal from "../modal/index";

import { db } from "../../app/firebase";

function index({ setShowModel, showModel, categories }) {
  const [file, setFile] = useState("");
  const [withSale, setWithSale] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    unit: "",
    category: "",
  });
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const resetForm = () => {
    const from = document.getElementById("addForm");
    from.reset();
  };
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem]);
      await addDoc(collection(db, "items"), {
        name: newItem.name.trim(),
        price: newItem.price,
        unit: newItem.unit,
        category: newItem.category,
        withSale: withSale === true ? true : false,
        salePercentage: withSale === true ? newItem.salePercentage : 0,
      }).then((res) => {
        setShowModel(false);
        resetForm();
      });
      setNewItem({ name: "", price: "", unit: "" });
    }
  };

  return (
    <Modal
      show={showModel}
      width="w-[25rem]"
      onClose={(e) => {
        setShowModel(false);
        resetForm();
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3 mb-2 ">
        <div className="flex items-center gap-1 mt-4 text-2xl font-semibold text-mako">
          {"إضافة صنف"}
        </div>
      </div>
      <form id="addForm">
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-center">
            <img
              className="w-[150px] h-[150px]"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://static.webteb.net/images/content/tbl_articles_article_15381_526d07634dd-b54a-43bc-9470-1e48cade4db9.jpg"
              }
              alt=""
            />
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </label>

          <label className="text-lg">إسم الصنف</label>
          <input
            /*  value={newItem.name} */
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className=" p-2 border w-[100%]"
            type="text"
            defaultValue={""}
            name="name"
          />
          <label className="text-lg">السعر </label>
          <input
            /*   value={newItem.price} */
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            className=" p-2 border w-[100%]"
            type="number"
            name="price"
          />
        </div>

        <div className="  my-2 text-[20px]">
          <label className="text-lg">الوحدة</label>
          <div className="flex gap-3">
            <select
              required={true}
              defaultValue={null}
              onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
              id="unit"
              class=" border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 "
            >
              <option></option>
              <option value={"كيلوجرام"}>كيلوجرام</option>
              <option value={"قطعة"}>قطعة</option>
              <option value={"عبوة"}>عبوة</option>
            </select>
          </div>
        </div>
        <div>
          <label className="text-lg">الفئة</label>
          <select
            required={true}
            defaultValue={null}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
            id="countries"
            class=" border border-gray-300 text-gray-900 text-sm   block w-full p-2.5 "
          >
            <option></option>
            {categories?.map?.((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <label className="text-lg">مع خصم</label>
          <input
            onChange={(e) => setWithSale(e.target.checked)}
            type="checkbox"
            name="withSale"
            defaultValue={withSale}
            /*  checked={false} */
          />
        </div>
        {withSale && (
          <div className="  mt-3">
            <label className="text-lg ">نسبة الخصم %</label>
            <input
              type="number"
              name="salePercentage"
              onChange={(e) =>
                setNewItem({ ...newItem, salePercentage: e.target.value })
              }
              className="mt-1 p-2 border w-[100%]"
              defaultValue={withSale}
              maxlength="2"
              min="1"
              max="99"
            />
          </div>
        )}
      </form>
      <div className="flex gap-2 mb-4">
        <button
          className="w-full flex items-center justify-center hover:bg-[#59794b] bg-[#547445] text-white  gap-2  h-[35px] font-bold  rounded-md cursor-pointer   mt-5"
          onClick={() => {
            setShowModel(false);
            resetForm();
          }}
        >
          رجوع
        </button>
        <button
          type="submit"
          className="w-full flex items-center justify-center hover:bg-[#c0533ac5]   bg-[#C0533A]   text-white  gap-2  h-[35px] font-bold  rounded-md cursor-pointer   mt-5"
          onClick={addItem}
        >
          إصافة
        </button>
      </div>
    </Modal>
  );
}

export default index;
