"use client";
import Modal from "../modal/index";
import Delivery from "./delivery/index";
import BranchReceipt from "./branchReceipt/index";
import { useState } from "react";
import SelectType from "./selectType/index";
function SetReceiptType({ showModal, setShowModal }) {
  const [receiptType, setReceiptType] = useState("delivery");
  return (
    <Modal
      width="w-[100%]  md:w-[75%] lg:w-[50%]"
      maxHeight={"100vh"}
      withoutPadding={true}
      show={showModal}
      onClose={(e) => {
        setShowModal(false);
      }}
    >
      <div className="relative">
        <SelectType receiptType={receiptType} setReceiptType={setReceiptType} />
        {receiptType === "delivery" && <Delivery setShowModal={setShowModal} />}
        {receiptType === "branchReceipt" && (
          <BranchReceipt setShowModal={setShowModal} />
        )}
      </div>
    </Modal>
  );
}

export default SetReceiptType;
