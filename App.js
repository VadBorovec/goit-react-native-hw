import React, { useState } from "react";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
// Custom Fonts Loader
// import useCustomFonts from "./hooks/getCustomFonts";
import { useFonts } from "expo-font";
// status bar - time, network status, battery charge, wireless networks
import { StatusBar } from "expo-status-bar";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

export default function App() {
  // const { fontsLoaded } = useCustomFonts();
  const [fontsLoaded] = useFonts({
    JosefinSansThin: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
    JosefinSansRegular: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
    JosefinSansBold: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
  });

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

// !==============

// ! for load fonts from hook, dont working
// const { fontsLoaded, setFontsLoaded, loadFonts } = useCustomFonts();
// if (!fontsLoaded) {
//   return (
//     <AppLoading
//       startAsync={loadFonts}
//       onFinish={() => setFontsLoaded(true)}
//       onError={console.warn}
//     />
//   );
// }
