import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import orderSlice from "./order-slice";

const store = configureStore({
  reducer: {
    cart: productsSlice,
    order: orderSlice,
  },
});
export default store;
