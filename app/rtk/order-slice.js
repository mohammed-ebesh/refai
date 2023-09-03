import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  showOrderTypeModal: false,
  orderType: {},
};
export const orderSlice = createSlice({
  initialState,
  name: "orderSlice",
  reducers: {
    setShowOrderTypeModal: (state, action) => {
      state.showOrderTypeModal = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
  },
});
export default orderSlice.reducer;
export const { setShowOrderTypeModal, setOrderType } = orderSlice.actions;
