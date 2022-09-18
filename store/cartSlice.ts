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
      const indexProd = state.cartItems.findIndex(
        (el) => el.id === action.payload.id
      );
      if (indexProd === -1)
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      else {
        const newCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cartItems: [...newCartItems],
        };
      }
    },
    resetCart() {
      return {
        ...initialState,
      };
    },
  },
});

export const { addProduct, resetCart } = cartSlice.actions;

export const myCartItems = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
