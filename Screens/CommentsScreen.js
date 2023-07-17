import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comments Screen</Text>
      {/* Add your  Comments Screen UI and functionality here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
