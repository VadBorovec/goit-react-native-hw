import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function useUploadPhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  const uploadPhoto = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error selecting image:", error);
    }
  };

  return {
    selectedImage,
    setSelectedImage,
    uploadPhoto,
  };
}
