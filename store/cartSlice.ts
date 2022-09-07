import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

// Initial State
interface CartState {
  cartItems: Product[];
}
const initialState: CartState = {
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

export const cartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
