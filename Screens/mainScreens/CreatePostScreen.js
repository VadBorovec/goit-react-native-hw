import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from "react-native";
// Icons
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// Camera
import { Camera } from "expo-camera";
import useCamera from "../../hooks/getCamera";
// Upload photo
import useUploadPhoto from "../../hooks/getUploadPhoto";
// Location
import useGetCurrentLocation from "../../hooks/getLocation";
// firbase
import { storage } from "../../firebase/config";

export default function CreatePostScreen({ navigation }) {
  const [postTitle, setPostTitle] = useState("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [geolocation, setGeolocation] = useState("");
  const [isGeolocationFocused, setIsGeolocationFocused] = useState(false);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  const location = useGetCurrentLocation();
  const {
    hasPermission,
    setCameraRef,
    cameraType,
    handleCameraFlip,
    takePhoto,
    photoUri,
    setPhotoUri,
  } = useCamera();
  const { selectedImage, setSelectedImage, uploadPhoto } = useUploadPhoto();

  const handleTakePhoto = async () => {
    try {
      const uri = await takePhoto(); // Await the photo URI
      console.log("handleTakePhoto uri >", uri);
      setPhotoUri(uri); // Update the photoUri state with the URI
      setSelectedImage(uri); // Update the selectedImage state with the URI
      setIsPhotoTaken(true); // Update the isPhotoTaken state
    } catch (error) {
      console.log("Error taking photo:", error);
    }
  };

  const handleUploadPhoto = async () => {
    try {
      const uri = await uploadPhoto(); // Await the photo URI
      console.log("handleUploadPhoto uri >", uri);
      setPhotoUri(uri); // Update the photoUri state with the URI
      setSelectedImage(uri); // Update the selectedImage state with the URI
      setIsPhotoTaken(true); // Update the isPhotoTaken state
    } catch (error) {
      console.log("Error uploading photo:", error);
    }
  };

  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(photoUri);
      const file = await response.blob();

      const uniquePostId = Date.now().toString();

      await storage.ref(`postImage/${uniquePostId}`).put(file);

      const processedPhoto = await storage
        .ref("postImage")
        .child(uniquePostId)
        .getDownloadURL();

      console.log("processedPhoto", processedPhoto);
    } catch (error) {
      console.log("uploadPhotoToServer Error:", error);
    }
  };

  const handleSubmit = () => {
    if (!isPhotoTaken && !selectedImage) {
      alert("Previously make a shot");
      return;
    }

    if (!postTitle) {
      alert("Please add name and location");
      return;
    }

    console.log(`
    selectedImg - ${selectedImage};
      uri - ${photoUri};
      title - ${postTitle};
      location - ${location};
      geolocationTitle - ${geolocation}:
      isPhotoTaken - ${isPhotoTaken};
      `);
    uploadPhotoToServer();
    alert("✅ Post published successfully! 🎉");
    navigation.navigate("Posts", {
      selectedImage,
      postTitle,
      location,
      geolocation,
    });
    setPhotoUri(null);
    setPostTitle("");
    setGeolocation("");
    setIsPhotoTaken(false);
    setSelectedImage(null);
  };

  const handleDelete = () => {
    console.log("delete draft");
    alert("Draft deleted");
    setPhotoUri(null);
    setPostTitle("");
    setGeolocation("");
    setIsPhotoTaken(false);
    setSelectedImage(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          {!hasPermission ? (
            <View style={styles.noAccesView}>
              <Text style={styles.noAccesText}>No access to camera.</Text>
              <Text style={styles.noAccesText}>
                Please enable camera access in your device settings to use this
                feature.
              </Text>
              <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => {
                  Linking.openSettings();
                }}
              >
                <Text style={styles.settingsButtonText}>Go to Settings</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Camera style={styles.camera} type={cameraType} ref={setCameraRef}>
              <View style={styles.photoView}>
                {photoUri ? (
                  <Image style={styles.image} source={{ uri: photoUri }} />
                ) : (
                  <>
                    {selectedImage ? (
                      <Image
                        source={{ uri: selectedImage }}
                        style={styles.image}
                      />
                    ) : (
                      <>
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
                      </>
                    )}
                  </>
                )}
              </View>
            </Camera>
          )}

          {isPhotoTaken || selectedImage ? (
            <TouchableOpacity
              style={styles.choosePhotoButton}
              onPress={handleUploadPhoto}
            >
              <Text style={styles.choosePhotoButtonText}>Edit Photo</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.choosePhotoButton}
              onPress={handleUploadPhoto}
            >
              <Text style={styles.choosePhotoButtonText}>
                Upload from Gallery
              </Text>
            </TouchableOpacity>
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
    marginBottom: 20,
  },
  noAccesView: {
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    borderRadius: 8,
    backgroundColor: "#000",
    marginBottom: 8,
  },
  noAccesText: {
    color: "#fff",
    textAlign: "center",
  },
  settingsButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
  settingsButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  photoView: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
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
  choosePhotoButton: {
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF6C00",
    marginBottom: 20,
  },
  choosePhotoButtonText: {
    color: "#FF6C00",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
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
