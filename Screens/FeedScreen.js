import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FeedScreen() {
  const navigation = useNavigation();

  const handleRegister = () => {
    // Perform registration logic here
    // Once registration is successful, navigate to FeedScreen
    navigation.navigate("Registration");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleRegister}>
      <Text style={styles.heading}>Feed Screen</Text>
      {/* Add your  Feed Screen UI and functionality here */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
