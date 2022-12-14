import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import likeSlice from "./likeSlice";
import userSlice from "./userSlice";

// config the store
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    like: likeSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
