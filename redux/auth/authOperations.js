// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
//   signOut,
// } from "firebase/auth";
// import { Alert } from "react-native";
// import { auth } from "../../firebase/config";

// const register = createAsyncThunk(
//   "auth/register",
//   async ({ email, password, login }) => {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("user", user);

//       const userPayload = {
//         userId: user.uid,
//         displayName: login,
//         email: user.email,
//         // other user-related data if needed
//       };

//       await updateProfile(auth.currentUser, {
//         displayName: login,
//       });

//       return userPayload;
//     } catch (error) {
//       console.log(error);
//       Alert.alert(error.message);
//       return;
//     }
//   }
// );
// const login = createAsyncThunk("auth/login", async ({ email, password }) => {
//   try {
//     const { user } = await signInWithEmailAndPassword(auth, email, password);
//     console.log("user", user);

//     const userPayload = {
//       userId: user.uid,
//       displayName: user.displayName,
//       email: user.email,
//       // other user-related data if needed
//     };

//     return userPayload;
//   } catch (error) {
//     console.log(error);
//     Alert.alert(error.message);
//     return;
//   }
// });
// const logout = createAsyncThunk("auth/logout", async () => {
//   try {
//     await signOut(auth);
//     Alert.alert("You have been logged out");
//     return;
//   } catch (error) {
//     console.log(error);
//     Alert.alert(error.message);
//     return;
//   }
// });

// export const authOperations = {
//   register,
//   login,
//   logout,
// };

// !============
import db from "../../firebase/config";
import { authSlice } from "./authReducer";

export const register =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
      console.log("user", user);
    } catch (error) {
      console.log("error", error);

      console.log("error.message", error.message);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.code", error.code);
      console.log("error.message", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};
