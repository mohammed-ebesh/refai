import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";

const store = configureStore({
  reducer: {
    cart: productsSlice,
  },
});
export default store;
