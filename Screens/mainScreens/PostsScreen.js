import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { posts, users, comments } from "../../server/db";

export default function PostsScreen() {
  const [likedPosts, setLikedPosts] = useState([]);
  const navigation = useNavigation();

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

  const handleCommentsPress = (post) => {
    navigation.navigate("Comments", { post });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.postId.toString()}
        renderItem={({ item }) => {
          const user = users.find((u) => u.userId === item.userId);
          const postComments = comments.filter((c) => c.postId === item.postId);
          const isLiked = likedPosts.includes(item.postId);
          const getLikeCount = () => (isLiked ? item.likes + 1 : item.likes);

          return (
            <View style={styles.postContainer}>
              <View style={styles.userInfoContainer}>
                <Image source={user.avatarImg} style={styles.avatar} />
                <View style={styles.userInfo}>
                  <Text style={styles.login}>{user.login}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
              </View>
              <Image source={item.imgUrl} style={styles.postImage} />
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity
                    style={styles.iconRow}
                    onPress={() => handleCommentsPress(item)}
                  >
                    <Feather name="message-circle" size={24} color="#FF6C00" />
                    <Text style={styles.infoText}>{postComments.length}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => toggleLike(item.postId)}>
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
                    <Text style={styles.locationText}>{item.location}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
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
