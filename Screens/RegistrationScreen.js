import React, { useState } from "react";
import {
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
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Background from "../assets/images/background.jpg";
import AvatarPlaceholder from "../assets/images/avatar-large.jpg";

export default function RegistrationScreen() {
  const [isAvatarAdded, setIsAvatarAdded] = useState(false);

  const [login, setLogin] = useState("");
  const [isLoginFocused, setIsLoginFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHiddn] = useState(true);

  const navigation = useNavigation();

  const onSignup = () => {
    console.log("You tapped the button!");
    navigation.navigate("Posts");
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
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
            <Text style={styles.header}>Sign p</Text>
            <View style={styles.inputWrap}>
              <TextInput
                style={[styles.input, isLoginFocused && styles.inputFocused]}
                value={login}
                onChangeText={setLogin}
                placeholder="Login"
                onFocus={() => setIsLoginFocused(true)}
                onBlur={() => setIsLoginFocused(false)}
              />
              <TextInput
                style={[styles.input, isEmailFocused && styles.inputFocused]}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail"
                keyboardType="email-address"
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
              />
              <TextInput
                style={[styles.input, isPasswordFocused && styles.inputFocused]}
                value={password}
                onChangeText={setPassword}
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
            <TouchableOpacity
              title="Signup"
              style={styles.registerButton}
              onPress={onSignup}
            >
              <Text style={styles.registerButtonText}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.logInWrap}>
              <Text style={styles.logInText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.logInLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    flexShrink: 0,
  },
  form: {
    height: "67%",
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "JosefinSansBold",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    // lineHeight: "normal",
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
    fontFamily: "JosefinSansBold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    // lineHeight: "normal",
  },
  logInWrap: {
    flexDirection: "row",
  },
  logInText: {
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    // lineHeight: "normal",
  },
  logInLink: {
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    // lineHeight: "normal",
    marginLeft: 8,
    textDecorationLine: "underline",
  },
});
