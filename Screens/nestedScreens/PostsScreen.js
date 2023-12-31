import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
//* for FlatList from db.jsx file
import { posts, users, comments } from "../../server/db";

export default function PostsScreen({ navigation, route }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPhotos((prevPhotos) => [...prevPhotos, route.params]);
    }
  }, [route.params]);
  console.log("route.params ->", route.params);
  const { selectedImage, postTitle, location, geolocation } =
    route.params || {}; // Extract the parameters

  //* start of temporary features for toggle like
  const [likedPosts, setLikedPosts] = useState([]);
  const isLiked = likedPosts.includes(posts[0].postId);
  const getLikeCount = () => (isLiked ? posts[0].likes + 1 : posts[0].likes);

  const toggleLike = (postId) => {
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.includes(postId)) {
        // Unlike the post
        return prevLikedPosts.filter((id) => id !== postId);
      } else {
        // Like the post
        return [...prevLikedPosts, postId];
      }
    });
  };
  //* end of temporary features for toggle like

  const handleCommentsPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {/* "userInfoContainer"  view is static pro tempore */}
            <View style={styles.userInfoContainer}>
              <Image source={users[0].avatarImg} style={styles.avatar} />

              <View style={styles.userInfo}>
                <Text style={styles.login}>{users[0].login}</Text>
                <Text style={styles.email}>{users[0].email}</Text>
              </View>
            </View>
            <Image
              source={{ uri: item.selectedImage }}
              style={styles.postImage}
            />
            <Text style={styles.title}>{item.postTitle}</Text>
            <View style={styles.infoContainer}>
              <View style={styles.iconsContainer}>
                <TouchableOpacity
                  style={styles.iconRow}
                  onPress={() => handleCommentsPress(comments[0])}
                >
                  <Feather name="message-circle" size={24} color="#FF6C00" />
                  <Text style={styles.infoText}>{comments[0].length}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleLike(posts[0].postId)}>
                  <View style={styles.iconRow}>
                    {isLiked ? (
                      <FontAwesome name="heart" size={24} color="#FF6C00" />
                    ) : (
                      <Feather name="heart" size={24} color="#FF6C00" />
                    )}
                    <Text style={styles.infoText}>{getLikeCount()}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <View style={styles.iconRow}>
                  <Feather name="map-pin" size={24} color="#BDBDBD" />
                  <Text style={styles.locationText}>{item.geolocation}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  login: {
    fontSize: 13,
    fontWeight: 700,
  },
  email: {
    fontSize: 11,
    fontWeight: 400,
    color: "#777",
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontFamily: "JosefinSansBold",
    fontSize: 16,
    fontWeight: 500,
    color: "#212121",
    paddingLeft: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    paddingLeft: 6,
    paddingRight: 20,
  },
  locationText: {
    paddingLeft: 6,
  },
});
