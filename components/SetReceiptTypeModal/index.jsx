"use client";
import Modal from "../modal/index";
import Delivery from "./delivery/index";
import BranchReceipt from "./branchReceipt/index";
import { useState } from "react";
import SelectType from "./selectType/index";
import { useDispatch, useSelector } from "react-redux";
import { setShowOrderTypeModal } from "../../app/rtk/order-slice";

function SetReceiptType() {
  const { orderType } = useSelector((state) => state.order);
  const [receiptType, setReceiptType] = useState(
    orderType.type ?? "branchReceipt"
  );
  const dispatch = useDispatch();
  const { showOrderTypeModal } = useSelector((state) => state.order);

  return (
    <Modal
      width="w-[100%]  md:w-[75%] lg:w-[50%]"
      maxHeight={"100vh"}
      withoutPadding={true}
      show={showOrderTypeModal}
      onClose={(e) => {
        dispatch(setShowOrderTypeModal(false));
      }}
    >
      <div className="relative">
        <SelectType receiptType={receiptType} setReceiptType={setReceiptType} />
        {receiptType === "delivery" && <Delivery />}
        {receiptType === "branchReceipt" && <BranchReceipt />}
      </div>
    </Modal>
  );
}

export default SetReceiptType;
