// import { createSlice } from "@reduxjs/toolkit";
// import { authOperations } from "./authOperations";

// const initialState = {
//   user: {
//     userId: null,
//     login: null,
//     email: null,
//     password: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, { payload }) {
//       state.user = payload.user;
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null, password: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, { payload }) {
//       state.user = payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// export const authReducer = authSlice.reducer;

//! =========
import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./authOperations";

const initialState = {
  user: {
    userId: null,
    login: null,
    email: null,
    posts: [],
  },
  token: "null",

  isLoggedIn: false,
  isRefreshing: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.user.login = action.payload.displayName;
      state.user.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user.email = action.payload.email;
      state.user.login = action.payload.displayName;
      state.token = action.payload.accessToken;
      state.user.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    [authOperations.logout.fulfilled](state, action) {
      state.user = {
        login: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectUsername = (state) => state.auth.user.login;
const selectIsRefreshing = (state) => state.auth.isRefreshing;
const selectUserEmail = (state) => state.auth.user.email;
const selectUserUserId = (state) => state.auth.user.userId;
const selectUserPosts = (state) => state.auth.user.posts;

export const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectIsRefreshing,
  selectUserEmail,
  selectUserPosts,
  selectUserUserId,
};
