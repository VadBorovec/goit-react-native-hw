import React, { useState } from "react";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
// Custom Fonts Loader
import useCustomFonts from "./hooks/getCustomFonts";
// status bar - time, network status, battery charge, wireless networks
import { StatusBar } from "expo-status-bar";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

export default function App() {
  const { fontsLoaded } = useCustomFonts();
  // const [isAuth, setIsAuth] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuth(true);
  };

  const routing = useRoute(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {fontsLoaded && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              {routing}
              <StatusBar style="auto" />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
