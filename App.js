import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSansItalic: require("./assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf"),
    JosefinSans: require("./assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Whereas disregard and contempt for human rights have resulted
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontFamily: "JosefinSansItalic",
  },
});
