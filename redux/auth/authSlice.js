// import { createSlice } from "@reduxjs/toolkit";
// import { authOperations } from "./authOperations";

// const initialState = {
//   user: {
//     userId: null,
//     login: null,
//     email: null,
//   },
//   token: null,

//   isLoggedIn: false,
//   isRefreshing: false,
// };
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, { payload }) {
//       state.user.email = payload.email;
//       state.token = payload.accessToken;
//       state.user.login = payload.displayName;
//       state.user.userId = payload.userId;
//       state.isLoggedIn = true;
//     },
//     [authOperations.login.fulfilled](state, { payload }) {
//       state.user.email = payload.email;
//       state.user.login = payload.displayName;
//       state.token = payload.accessToken;
//       state.user.userId = payload.userId;
//       state.isLoggedIn = true;
//     },
//     [authOperations.logout.fulfilled](state, action) {
//       state.user = {
//         login: null,
//         email: null,
//       };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

// const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// const selectUsername = (state) => state.auth.user.login;
// const selectIsRefreshing = (state) => state.auth.isRefreshing;
// const selectUserEmail = (state) => state.auth.user.email;
// const selectUserUserId = (state) => state.auth.user.userId;
// // const selectUserPosts = (state) => state.auth.user.posts;

// export const authSelectors = {
//   selectIsLoggedIn,
//   selectUsername,
//   selectIsRefreshing,
//   selectUserEmail,
//   // selectUserPosts,
//   selectUserUserId,
// };

// !================

import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./authOperations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add other reducers here if needed
  },
  extraReducers: (builder) => {
    // Reducer for registerUser
    builder.addCase(authOperations.register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authOperations.register.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload;
    });
    builder.addCase(authOperations.register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Reducer for loginUser
    builder.addCase(authOperations.login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authOperations.login.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload;
    });
    builder.addCase(authOperations.login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
