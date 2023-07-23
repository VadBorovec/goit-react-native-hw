// test
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function useCamera() {
  const [photoUri, setPhotoUri] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCameraFlip = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhotoUri(uri);
    }
  };

  return {
    hasPermission,
    cameraRef,
    setCameraRef,
    cameraType,
    handleCameraFlip,
    takePhoto,
    photoUri,
    setPhotoUri,
  };
}
