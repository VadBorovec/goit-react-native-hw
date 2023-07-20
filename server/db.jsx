// db.jsx
export const posts = [
  {
    postId: 1,
    imgUrl: require("../assets/images/post1-wood.jpg"),
    title: "Post 1",
    likes: 10,
    location: "Carpathians, Ukraine",
    userId: 1,
  },
  {
    postId: 2,
    imgUrl: require("../assets/images/post2-sunset.jpg"),
    title: "Post 2",
    likes: 5,
    location: "Odesa, Ukraine",
    userId: 2,
  },
  {
    postId: 3,
    imgUrl: require("../assets/images/post3-house.jpg"),
    title: "Post 3",
    likes: 15,
    location: "Italy",
    userId: 3,
  },
];

export const users = [
  {
    userId: 1,
    login: "user1",
    email: "user1@example.com",
    password: "password1",
    avatarImg: require("../assets/images/avatar-large.jpg"),
  },
  {
    userId: 2,
    login: "user2",
    email: "user2@example.com",
    password: "password2",
    avatarImg: require("../assets/images/avatar-large.jpg"),
  },
  {
    userId: 3,
    login: "user3",
    email: "user3@example.com",
    password: "password3",
    avatarImg: require("../assets/images/avatar-large.jpg"),
  },
];

export const comments = [
  {
    commentId: 1,
    text: "Comment 1 for Post 1",
    postId: 1,
    userId: 1,
  },
  {
    commentId: 2,
    text: "Comment 2 for Post 1",
    postId: 1,
    userId: 2,
  },
  {
    commentId: 3,
    text: "Comment 3 for Post 2",
    postId: 2,
    userId: 3,
  },
  {
    commentId: 4,
    text: "Comment 4 for Post 3",
    postId: 3,
    userId: 1,
  },
  {
    commentId: 5,
    text: "Comment 5 for Post 3",
    postId: 3,
    userId: 2,
  },
  {
    commentId: 6,
    text: "Comment 6 for Post 3",
    postId: 3,
    userId: 1,
  },
  {
    commentId: 7,
    text: "Comment 7 for Post 3",
    postId: 3,
    userId: 3,
  },
  {
    commentId: 8,
    text: "Comment 8 for Post 3",
    postId: 3,
    userId: 2,
  },
  {
    commentId: 9,
    text: "Comment 9 for Post 1",
    postId: 1,
    userId: 2,
  },
  {
    commentId: 10,
    text: "Comment 10 for Post 1",
    postId: 1,
    userId: 3,
  },
  {
    commentId: 11,
    text: "Comment 11 for Post 2",
    postId: 2,
    userId: 2,
  },
  {
    commentId: 12,
    text: "Comment 12 for Post 2",
    postId: 2,
    userId: 1,
  },
];
