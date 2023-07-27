import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { authSlice } from "./auth/authSlice";
// from video
import { authSlice } from "./auth/authReducer";
// import { postsSlice } from "./posts/postsSlice";
// import { commentsSlice } from "./comments/commentsSlice";

// from video
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authSlice.reducer),
    auth: persistReducer(authPersistConfig, rootReducer),
    // posts: postsSlice.reducer,
    // comments: commentsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
