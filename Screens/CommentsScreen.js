import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { users, posts, comments } from "../server/db";

const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const route = useRoute();
  const { post } = route.params;

  const postComments = comments.filter(
    (comment) => comment.postId === post.postId
  );

  const renderItem = ({ item }) => {
    const user = users.find((u) => u.userId === item.userId);
    const isCurrentUser = user.userId === post.userId;

    return (
      <View
        style={[
          styles.commentContainer,
          isCurrentUser ? styles.currentUserComment : styles.otherUserComment,
        ]}
      >
        <Image source={user.avatarImg} style={styles.avatar} />
        <View style={styles.commentContent}>
          <Text style={styles.commentText}>{item.text}</Text>
          <Text style={styles.commentAuthor}>{user.login}</Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 90}
      >
        <View style={styles.content}>
          <View style={styles.imgContainer}>
            <Image source={post.imgUrl} style={styles.postImage} />
            <Text style={styles.title}>{post.title}</Text>
          </View>
          <FlatList
            data={postComments}
            keyExtractor={(item) => item.commentId.toString()}
            renderItem={renderItem}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, isCommentFocused && styles.inputFocused]}
              value={comment}
              onChangeText={setComment}
              placeholder="Write a comment..."
              onFocus={() => setIsCommentFocused(true)}
              onBlur={() => setIsCommentFocused(false)}
            />
            <TouchableOpacity
              style={styles.inputSend}
              onPress={() => {
                console.log(`${comment}" - is sended`);
                setComment("");
              }}
            >
              <Ionicons name="arrow-up-circle" size={44} color="#FF6C00" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  imgContainer: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    // marginVertical: 10,
  },
  title: {
    fontFamily: "JosefinSansBold",
    fontSize: 16,
    fontWeight: 500,
    color: "#212121",
    paddingLeft: 5,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  currentUserComment: {
    flexDirection: "row-reverse",
    // justifyContent: "flex-start",
  },
  otherUserComment: {
    // justifyContent: "flex-end",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    resizeMode: "cover",
  },
  commentContent: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,

    padding: 5,
  },
  commentText: {
    fontSize: 16,
  },
  commentAuthor: {
    color: "#777",
    marginTop: 2,
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    height: 50,
    flexShrink: 0,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
  },
  inputFocused: {
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  inputSend: {
    position: "absolute",
    right: 5,
    bottom: 9,
  },
});

export default CommentsScreen;
