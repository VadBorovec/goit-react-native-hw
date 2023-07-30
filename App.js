import React, { useState, useEffect } from "react";
// Custom Fonts Loader
import useCustomFonts from "./hooks/getCustomFonts";
// status bar - time, network status, battery charge, wireless networks
import { StatusBar } from "expo-status-bar";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
// firebase
import Main from "./components/main";

export default function App() {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {fontsLoaded && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Main />
            <StatusBar style="auto" />
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
