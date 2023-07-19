// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// //Temporary markup
// export default function CommentsScreen() {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Comments Screen</Text>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("Registration")}
//       >
//         <Text style={styles.text}>to Registration Screen</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("Login")}
//       >
//         <Text style={styles.text}>to Login Screen</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("Posts")}
//       >
//         <Text style={styles.text}>to Posts Screen</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("Profile")}
//       >
//         <Text style={styles.text}>to Profile Screen</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.text}
//         onPress={() => navigation.navigate("CreatePost")}
//       >
//         <Text style={styles.text}>to Create Post Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "tomato",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 700,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 400,
//     marginBottom: 10,
//   },
// });

//! ===========

import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Background from "../assets/images/background.jpg";

export default function CommentsScreen() {
  const navigation = useNavigation();

  const handleBackdropPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleBackdropPress}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -40}
      >
        <ImageBackground style={styles.background} source={Background}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.content}>
              <View style={styles.formContainer}>
                <TextInput style={styles.input} placeholder="Username" />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                />
                <Button
                  title="Submit"
                  onPress={() => console.log("Submit pressed")}
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Text>to Profile Screen</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  content: {
    height: 600,
    backgroundColor: "#fff",
    padding: 25,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
});
