import React from "react";
import { useFonts } from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    JosefinSansThin: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
    JosefinSansRegular: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
    JosefinSansBold: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
  });

  return {
    fontsLoaded,
  };
}
