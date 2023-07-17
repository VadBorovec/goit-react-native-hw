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
import Background from "../assets/images/background.jpg";
import AvatarPlaceholder from "../assets/images/avatar-large.jpg";

export default function RegistrationScreen() {
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.block}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground style={styles.background} source={Background}>
          {/* <ScrollView> */}
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={AvatarPlaceholder} />
              <TouchableOpacity style={styles.addAvatarButton}>
                <Text style={styles.addAvatarButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Registration</Text>
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
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.passwordInput,
                  isPasswordFocused && styles.inputFocused,
                ]}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
              <Text style={styles.showPasswordText}>Show</Text>
            </View>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.signInLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ScrollView> */}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    height: "67%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 92,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -60,
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
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  addAvatarButtonText: {
    color: "#FF6C00",
    fontSize: 14,
  },
  heading: {
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35.16,
    marginBottom: 33,
  },
  input: {
    width: "100%",
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: "50%",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  inputFocused: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 43,
  },
  showPasswordText: {
    position: "absolute",
    right: 16,
    bottom: 30,
    color: "#1B4371",
  },
  registerButton: {
    backgroundColor: "#FF6C00",
    borderRadius: "50%",
    width: "80%",
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  registerButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
  },
  signInContainer: {
    flexDirection: "row",
  },
  signInText: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
  },
  signInLink: {
    marginLeft: 8,
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 18.75,
  },
});
