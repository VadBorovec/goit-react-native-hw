import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Temporary markup
export default function PostsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Posts Screen</Text>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("Registration")}
      >
        <Text style={styles.text}>to Registration Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>to Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>to Profile Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <Text style={styles.text}>to Create Post Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.text}
        onPress={() => navigation.navigate("Comments")}
      >
        <Text style={styles.text}>to Comments Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  heading: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 10,
  },
});