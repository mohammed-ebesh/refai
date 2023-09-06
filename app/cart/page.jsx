"use client";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import OrderDetails from "../../components/orderDetails/index";
function Cart() {
  return (
    <>
      <Header showJustNav={true} />
      <OrderDetails />
      <Footer />
    </>
  );
}

export default Cart;
