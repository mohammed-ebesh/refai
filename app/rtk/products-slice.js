import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {itemsList} from 'DataFolder'

// Waiting APi ..

// export const fetchProducts = createAsyncThunk(
//   "productsSlice/fetchProducts",
//   async () => {
//     const red = await fetch("/");
//     const data = await res.json;
//     return data;
//   }
// );

const initialState = {
  cart: [],
  // items: itemsList,
  totalQuantity: 0,
  totalPrice: 0,
};
export const productsSlice = createSlice({
  initialState,
  name: "productsSlice",
  reducers: {
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.lastPrice = item.quantity * item.price;
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        item.lastPrice = item.lastPrice - item.price;
      }
    },
    weightAdjustment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity = action.payload.quantity;
      item.lastPrice = item.price * action.payload.quantity;
    },
    addToCart: (state, action) => {
      const itemsInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemsInCart) {
        itemsInCart.quantity++;
        itemsInCart.lastPrice = itemsInCart.quantity * itemsInCart.price;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          lastPrice: action.payload.price,
        });
      }
    },
    removeItem: (state, action) => {
      const remove = state.cart.filter((item) => item.id !== action.payload);
      state.cart = remove;
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});
export default productsSlice.reducer;
export const {
  increment,
  decrement,
  addToCart,
  removeItem,
  emptyCart,
  weightAdjustment,
} = productsSlice.actions;
