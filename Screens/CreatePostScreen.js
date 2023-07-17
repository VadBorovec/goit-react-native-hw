import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Post Screen</Text>
      {/* Add your  Create Post Screen UI and functionality here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "pink",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
