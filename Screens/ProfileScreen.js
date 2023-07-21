import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
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
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Background from "../assets/images/background.jpg";
import AvatarPlaceholder from "../assets/images/avatar-large.jpg";

import { posts, users, comments } from "../server/db";

export default function ProfileScreen() {
  const [user, setUser] = useState(users[0]);
  const [isAvatarAdded, setIsAvatarAdded] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  const navigation = useNavigation();

  const userPosts = posts.filter((post) => post.userId === user.userId);

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
      <ImageBackground style={styles.background} source={Background}>
        <View style={styles.wrapper}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <Image style={styles.avatar} source={user.avatarImg} />

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
          </View>
          <Text style={styles.header}>{user.login}</Text>
          <View style={styles.postsWrap}>
            <FlatList
              //todo data={userPosts}
              data={posts}
              keyExtractor={(item) => item.postId.toString()}
              renderItem={({ item }) => {
                const user = users.find((u) => u.userId === item.userId);
                const postComments = comments.filter(
                  (c) => c.postId === item.postId
                );
                const isLiked = likedPosts.includes(item.postId);
                const getLikeCount = () =>
                  isLiked ? item.likes + 1 : item.likes;

                return (
                  <View style={styles.postContainer}>
                    <Image source={item.imgUrl} style={styles.postImage} />
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.infoContainer}>
                      <View style={styles.iconsContainer}>
                        <TouchableOpacity
                          style={styles.iconRow}
                          onPress={() => handleCommentsPress(item)}
                        >
                          <Feather
                            name="message-circle"
                            size={24}
                            color="#FF6C00"
                          />
                          <Text style={styles.infoText}>
                            {postComments.length}
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => toggleLike(item.postId)}
                        >
                          <View style={styles.iconRow}>
                            {isLiked ? (
                              <FontAwesome
                                name="heart"
                                size={24}
                                color="#FF6C00"
                              />
                            ) : (
                              <Feather name="heart" size={24} color="#FF6C00" />
                            )}
                            <Text style={styles.infoText}>
                              {getLikeCount()}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Map")}
                      >
                        <View style={styles.iconRow}>
                          <Feather name="map-pin" size={24} color="#BDBDBD" />
                          <Text style={styles.locationText}>
                            {item.location}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
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
  },
  wrapper: {
    height: "80%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    width: "100%",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 120,
    height: 120,
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
    borderRadius: 12,
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
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  postContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  postImage: {
    width: "100%",
    height: 200,
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
