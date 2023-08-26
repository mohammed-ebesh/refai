"use client";

import Model from "../modal/index";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../app/firebase";

const ConfirmDelete = ({ setShowModel, showModel, item }) => {
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
    setShowModel(false);
  };

  if (!item) {
    <div></div>;
  }
  return (
    <Model
      show={showModel}
      width="w-[25rem]"
      onClose={(e) => {
        setShowModel(false);
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3 py-4">
        <div className="flex items-center gap-1 mt-4 text-2xl font-semibold text-mako">
          {"حذف"}
        </div>
        <div className="text-center text-mako font-bold">
          هل أنت متأكد من أنك تريد حذف{" "}
          <span className="underline">{item?.name ?? ""}</span>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className="w-full flex items-center justify-center hover:bg-[#59794b] bg-[#547445] text-white  gap-2  h-[35px] font-bold  rounded-md cursor-pointer   mt-5"
          onClick={() => setShowModel(false)}
        >
          رجوع
        </button>
        <button
          className="w-full flex items-center justify-center hover:bg-[#c0533ac5]   bg-[#C0533A]   text-white  gap-2  h-[35px] font-bold  rounded-md cursor-pointer   mt-5"
          onClick={() => deleteItem(item.id)}
        >
          تأكيد
        </button>
      </div>
    </Model>
  );
};
export default ConfirmDelete;
