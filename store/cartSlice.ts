import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";

// Initial State
interface CounterState {
  cartItems: Product[];
}
const initialState: CounterState = {
  cartItems: [],
};

// create a slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      console.log();
      state.cartItems.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
