import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

// Initial State
interface LikeState {
  likeItems: Product[];
}
const initialState: LikeState = {
  likeItems: [],
};

// create a slice
export const likeSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    likeProduct(state, action: PayloadAction<Product>) {
      const indexProd = state.likeItems.findIndex(
        (el) => el.id === action.payload.id
      );
      if (indexProd === -1) state.likeItems.push(action.payload);
      else {
        const newLikeItems = state.likeItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.likeItems = [...newLikeItems];
      }
    },
  },
});

export const { likeProduct } = likeSlice.actions;

export const myLikeItems = (state: RootState) => state.like.likeItems;

export default likeSlice.reducer;
