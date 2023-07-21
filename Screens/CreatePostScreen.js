import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const CreatePostScreen = () => {
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [geolocation, setGeolocation] = useState("");
  const [isGeolocationFocused, setIsGeolocationFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // keyboardVerticalOffset={Platform.OS === "ios" ? -180 : -180}
      >
        <View>
          {photoUploaded ? (
            <View style={styles.photoUploadWrapper}>
              <View style={styles.skeleton}>
                <TouchableOpacity style={styles.ellipse}>
                  <Feather name="camera" size={30} color="#777" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Edit Photo</Text>
            </View>
          ) : (
            <View style={styles.photoUploadWrapper}>
              <View style={styles.skeleton}>
                <TouchableOpacity style={styles.ellipse}>
                  <Feather name="camera" size={30} color="#777" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Upload Photo</Text>
            </View>
          )}

          <View style={styles.inputWrapper}>
            <TextInput
              style={[styles.inputTitle, isTitleFocused && styles.inputFocused]}
              value={postTitle}
              onChangeText={setPostTitle}
              placeholder="Name..."
              onFocus={() => setIsTitleFocused(true)}
              onBlur={() => setIsTitleFocused(false)}
            />

            {/* Wrapper for recording geolocation */}
            <View style={styles.geolocationWrapper}>
              <Feather name="map-pin" size={20} color="#777" />
              <TextInput
                style={[
                  styles.geolocationInput,
                  isGeolocationFocused && styles.inputFocused,
                ]}
                value={geolocation}
                onChangeText={setGeolocation}
                placeholder="Add location"
                onFocus={() => setIsGeolocationFocused(true)}
                onBlur={() => setIsGeolocationFocused(false)}
              />
            </View>

            <TouchableOpacity
              style={styles.publishButton}
              onPress={() => {
                console.log("Publish Post");
                alert("Publish Post");
              }}
            >
              <Text style={styles.publishButtonText}>Publish</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deletePostWrapper}
            onPress={() => {
              console.log("delete draft");
              alert("Delete Draft");
            }}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  photoUploadWrapper: {
    marginBottom: 32,
  },
  skeleton: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    marginBottom: 8,
  },
  ellipse: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingLeft: 8,
    color: "#BDBDBD",
  },
  wrapper: {
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  inputWrapper: {
    marginBottom: 32,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
  },
  geolocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 32,
  },
  geolocationInput: {
    flex: 1,
    marginLeft: 10,
  },
  inputFocused: {
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  publishButton: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  publishButtonText: {
    color: "#FFFFFF",
    fontFamily: "JosefinSansBold",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
  },
  deletePostWrapper: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});

export default CreatePostScreen;
