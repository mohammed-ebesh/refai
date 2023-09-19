"use client";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import BranchReceipt from "../../components/orderDetails/branchReceipt";
import Delivery from "../../components/orderDetails/delivery";
import { useSelector } from "react-redux";

function Cart() {
  const { orderType } = useSelector((state) => state.order);
  console.log(orderType);
  return (
    <>
      <Header showJustNav={true} />
      {orderType.type === "delivery" && <Delivery />}
      {orderType.type === "branchReceipt" && <BranchReceipt />}

      <Footer />
    </>
  );
}

export default Cart;
