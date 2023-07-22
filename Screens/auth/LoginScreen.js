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
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Background from "../../assets/images/background.jpg";
import { Formik } from "formik";
import * as Yup from "yup";

export default function LoginScreen({ navigation }) {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("E-mail is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(3, "Invalid password")
      .max(20, "Invalid password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/,
        "Invalid password"
      ),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    alert(`${values.email}, Welcome back! Login Successful! 🎉`);
    navigation.navigate("Posts", {
      screen: "Default",
    });
    resetForm();
    setIsPasswordHidden(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -240 : -250}
      >
        <ImageBackground style={styles.background} source={Background}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.form}>
              <Text style={styles.header}>Login</Text>
              <View style={styles.formikWrap}>
                <Formik
                  initialValues={initialValues}
                  // validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <View>
                      <View style={styles.inputWrap}>
                        <TextInput
                          style={[
                            styles.input,
                            isEmailFocused && styles.inputFocused,
                            errors.email && touched.email && styles.inputError,
                          ]}
                          value={values.email}
                          onChangeText={handleChange("email")}
                          placeholder="E-mail"
                          keyboardType="email-address"
                          onFocus={() => setIsEmailFocused(true)}
                          onBlur={() => setIsEmailFocused(false)}
                        />
                        {errors.email && touched.email && (
                          <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                      </View>
                      <View style={styles.inputWrapLast}>
                        <View style={styles.inputPaswordWrap}>
                          <TextInput
                            style={[
                              styles.input,
                              isPasswordFocused && styles.inputFocused,
                              errors.password &&
                                touched.password &&
                                styles.inputError,
                            ]}
                            value={values.password}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry={isPasswordHidden}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                          />
                          <TouchableOpacity
                            style={styles.showPassword}
                            onPress={() =>
                              setIsPasswordHidden(!isPasswordHidden)
                            }
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
                        {errors.password && touched.password && (
                          <Text style={styles.errorText}>
                            {errors.password}
                          </Text>
                        )}
                      </View>
                      <TouchableOpacity
                        title="Signup"
                        style={styles.loginButton}
                        onPress={handleSubmit}
                      >
                        <Text style={styles.loginButtonText}>Login</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </Formik>
              </View>

              <View style={styles.logInWrap}>
                <Text style={styles.logInText}>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.logInLink}>Sign up</Text>
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
    flexShrink: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  header: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "JosefinSansBold",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  formikWrap: {
    width: "100%",
    maxWidth: 343,
    marginBottom: 32,
  },
  inputWrap: {
    marginBottom: 16,
  },
  inputWrapLast: {
    marginBottom: 43,
  },
  input: {
    height: 50,
    flexShrink: 0,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  inputFocused: {
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  inputError: {
    borderColor: "#FF0000",
  },
  errorText: {
    color: "#FF0000",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
  inputPaswordWrap: {
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    right: 12,
    bottom: 6,
    color: "#1B4371",
  },
  loginButton: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontFamily: "JosefinSansBold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
  logInWrap: {
    flexDirection: "row",
    paddingBottom: 132,
  },
  logInText: {
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
  logInLink: {
    color: "#1B4371",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    marginLeft: 8,
    textDecorationLine: "underline",
  },
});
