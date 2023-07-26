import React, { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
// import { AppLoading } from "expo";
import { useFonts } from "expo-font";
// status bar - time, network status, battery charge, wireless networks
import { StatusBar } from "expo-status-bar";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
// Screens
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/mainScreens/Home";
import MapScreen from "./Screens/nestedScreens/MapScreen";
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen";

// Custom Fonts Loader
// import useCustomFonts from "./hooks/getCustomFonts";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSansThin: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
    JosefinSansRegular: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
    JosefinSansBold: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
  });

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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {fontsLoaded && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                  name="Registration"
                  component={RegistrationScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Comments"
                  component={CommentsScreen}
                  options={{ title: "Comments" }}
                />
                <Stack.Screen
                  name="Map"
                  component={MapScreen}
                  options={{ title: "Location" }}
                />
              </Stack.Navigator>
              <StatusBar style="auto" />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

// !==============
// import React, { useState } from "react";
// // Navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { useRoute } from "./router";
// // Custom Fonts Loader
// import useCustomFonts from "./hooks/getCustomFonts";

// export default function App() {
//   const fontsLoaded = useCustomFonts();

//   if (!fontsLoaded) {
//     return null;
//   }

//   const routing = useRoute(null);

//   return <NavigationContainer>{routing}</NavigationContainer>;
// }
