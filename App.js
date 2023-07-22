// test
import React, { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/Home";
import MapScreen from "./Screens/nestedScreens/MapScreen";
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSansThin: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
    JosefinSansRegular: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
    JosefinSansBold: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
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
