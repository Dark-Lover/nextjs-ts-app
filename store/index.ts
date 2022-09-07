import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// config the store
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
