import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Background from "../assets/images/background.jpg";
import AvatarPlaceholder from "../assets/images/avatar-large.jpg";

export default function RegistrationScreen() {
  const [isAvatarAdded, setIsAvatarAdded] = useState(false);

  const [isLoginFocused, setIsLoginFocused] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHiddn] = useState(true);

  return (
    // <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styles.background} source={Background}>
        <View style={styles.form}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={AvatarPlaceholder} />
            <TouchableOpacity
              style={styles.addAvatarButton}
              onPress={() => setIsAvatarAdded(!isAvatarAdded)}
            >
              {isAvatarAdded ? (
                <Feather name="x-circle" size={24} color="#BDBDBD" />
              ) : (
                <Feather name="plus-circle" size={24} color="#FF6C00" />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.header}>Registration</Text>
          <View style={styles.inputWrap}>
            <TextInput
              style={[styles.input, isLoginFocused && styles.inputFocused]}
              placeholder="Login"
              onFocus={() => setIsLoginFocused(true)}
              onBlur={() => setIsLoginFocused(false)}
            />
            <TextInput
              style={[styles.input, isEmailFocused && styles.inputFocused]}
              placeholder="E-mail"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
            <TextInput
              style={[styles.input, isPasswordFocused && styles.inputFocused]}
              placeholder="Password"
              secureTextEntry={isPasswordHidden}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity
              style={styles.showPassword}
              onPress={() => setIsPasswordHiddn(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <Feather
                  name="eye-off"
                  size={24}
                  color="#1B4371"
                  style={styles.showPassword}
                />
              ) : (
                <Feather
                  name="eye"
                  size={24}
                  color="#FF6C00"
                  style={styles.showPassword}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.logInWrap}>
            <Text style={styles.logInText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.logInLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
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
    flexShrink: 0,
  },
  form: {
    height: 549,
    flexShrink: 0,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 92,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatar: {
    borderRadius: 16,
  },
  addAvatarButton: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 14,
    right: -12,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  inputWrap: {
    width: "100%",
    maxWidth: 343,
    marginBottom: 27,
  },
  input: {
    maxWidth: 343,
    height: 50,
    flexShrink: 0,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  inputFocused: {
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  showPassword: {
    position: "absolute",
    right: 14,
    bottom: 14,
    color: "#1B4371",
  },
  registerButton: {
    width: "100%",
    maxWidth: 343,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  logInWrap: {
    flexDirection: "row",
  },
  logInText: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  logInLink: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginLeft: 8,
    textDecorationLine: "underline",
  },
});
