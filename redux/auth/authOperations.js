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
//   async ({ email, password, username }) => {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await updateProfile(user, { displayName: username });

//       return user;
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// );

// const login = createAsyncThunk("auth/login", async ({ email, password }) => {
//   try {
//     const { user } = await signInWithEmailAndPassword(auth, email, password);

//     return user;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// const logout = createAsyncThunk("auth/logout", async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// const refreshUser = createAsyncThunk("auth/refreshUser", async () => {
//   try {
//     const user = await new Promise((resolve) => {
//       const unsubscribe = onAuthStateChanged(auth, (user) => {
//         unsubscribe(); // Unsubscribe after getting the user once
//         resolve(user);
//       });
//     });
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// });

// export const authOperations = {
//   register,
//   login,
//   logout,
//   refreshUser,
// };

// !=================
import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";

const register = createAsyncThunk(
  "auth/register",
  async ({ email, password, username }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      return user;
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
      return;
    }
  }
);
const login = createAsyncThunk("auth/login", async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    console.log(error);
    Alert.alert(error.message);
    return;
  }
});
const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await signOut(auth);
    Alert.alert("You have been logged out");
    return;
  } catch (error) {
    console.log(error);
    Alert.alert(error.message);
    return;
  }
});

export const authOperations = {
  register,
  login,
  logout,
};
