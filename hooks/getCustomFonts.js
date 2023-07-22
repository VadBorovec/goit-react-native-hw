import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCustomFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        JosefinSansThin: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
        JosefinSansRegular: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
        JosefinSansBold: require("../assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return {
    fontsLoaded,
  };
}
