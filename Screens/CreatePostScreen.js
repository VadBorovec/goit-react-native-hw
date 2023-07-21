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
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import useCamera from "../hooks/getCamera";
import useGetCurrentLocation from "../hooks/getLocation";

export default function CreatePostScreen() {
  const [postTitle, setPostTitle] = useState("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [geolocation, setGeolocation] = useState("");
  const [isGeolocationFocused, setIsGeolocationFocused] = useState(false);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  const navigation = useNavigation();
  const location = useGetCurrentLocation();
  const {
    hasPermission,
    cameraRef,
    setCameraRef,
    cameraType,
    handleCameraFlip,
    takePhoto,
    photoUri,
    setPhotoUri,
  } = useCamera();

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No acces to camera</Text>;
  }

  const handleTakePhoto = () => {
    takePhoto();
    setIsPhotoTaken(true);
  };

  const handleSubmit = () => {
    console.log(
      `uri - ${photoUri}; title - ${postTitle}; geolocation - ${geolocation} `
    );
    setPhotoUri(null);
    setPostTitle("");
    setGeolocation("");
    setIsPhotoTaken(false);
    navigation.navigate("Home", {
      screen: "Posts",
    });
  };

  const handleDelete = () => {
    console.log("delete draft");
    alert("Draft deleted");
    setPhotoUri(null);
    setPostTitle("");
    setGeolocation("");
    setIsPhotoTaken(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <Camera style={styles.camera} type={cameraType} ref={setCameraRef}>
            <View style={styles.photoView}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={handleCameraFlip}
              >
                <MaterialCommunityIcons
                  name="camera-flip"
                  size={30}
                  color="#FFF"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ellipse}
                onPress={handleTakePhoto}
              >
                <FontAwesome name="camera" size={30} color="#FFF" />
              </TouchableOpacity>
            </View>
          </Camera>

          {isPhotoTaken ? (
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>Edit Photo</Text>
            </View>
          ) : (
            <View style={styles.titleWrapper}>
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
              onPress={handleSubmit}
            >
              <Text style={styles.publishButtonText}>Publish</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.deletePostWrapper}
            onPress={handleDelete}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  camera: {
    marginBottom: 8,
  },
  photoView: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  flipContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  ellipse: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFFFFF4D",
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: {
    marginBottom: 32,
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
