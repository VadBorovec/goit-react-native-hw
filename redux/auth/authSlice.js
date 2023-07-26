import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userId: null,
    login: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserLogin(state, action) {
      state.login = action.payload;
    },
  },
});
