import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { useFonts } from "expo-font";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

export default function App() {
  const [courses, setCourses] = useState(COURSES);

  const [fontsLoaded] = useFonts({
    JosefinSansItalic: require("./assets/fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf"),
    JosefinSans: require("./assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.title}>
        Whereas disregard and contempt for human rights have resulted
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
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
