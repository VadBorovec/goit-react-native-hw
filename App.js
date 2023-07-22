import React, { useState } from "react";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
// Custom Fonts Loader
import useCustomFonts from "./hooks/getCustomFonts";

export default function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(null);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
