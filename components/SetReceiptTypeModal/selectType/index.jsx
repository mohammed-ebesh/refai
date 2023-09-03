"use client";
function SelectType({ receiptType, setReceiptType }) {
  return (
    <div className="absolute z-[1000] flex gap-4 w-full justify-center  bg-[#191919] p-7 text-white font-bold text-xl">
      <div
        onClick={() => setReceiptType("delivery")}
        className={`cursor-pointer ${
          receiptType === "delivery" ? "underline-offset-8 underline" : ""
        }`}
      >
        توصيل
      </div>
      <div className="text-3xl">|</div>
      <div
        onClick={() => setReceiptType("branchReceipt")}
        className={`cursor-pointer ${
          receiptType === "branchReceipt" ? "underline-offset-8 underline" : ""
        }`}
      >
        إستلام من الفرع
      </div>
    </div>
  );
}

export default SelectType;
