import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { UserInfo } from "firebase/auth";

// Initial State
interface UserState {
  logState: boolean;
  userData: UserInfo | null;
}
const initialState: UserState = {
  logState: false,
  userData: null,
};

// create a slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<UserInfo>) {
      return { ...state, logState: true, userData: action.payload };
    },
    logOut(state) {
      return { ...state, logState: false, userData: null };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const authUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;
