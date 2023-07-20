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
    text: "Exploring the majestic beauty of the mountains! 📸 #naturelovers #mountainadventures",
    postId: 1,
    userId: 1,
  },
  {
    commentId: 2,
    text: "Wow, this view is absolutely breathtaking! 😍",
    postId: 1,
    userId: 2,
  },
  {
    commentId: 3,
    text: "Totaly!",
    postId: 1,
    userId: 1,
  },
  {
    commentId: 4,
    text: "I wish I could be there right now! 🏔️",
    postId: 1,
    userId: 3,
  },
  {
    commentId: 5,
    text: "Nice shot 📸",
    postId: 1,
    userId: 3,
  },
  {
    commentId: 6,
    text: "Taking in the serenity of the sea and the sound of waves crashing. 🌊 #oceanlover #seasidevibes",
    postId: 2,
    userId: 2,
  },
  {
    commentId: 7,
    text: "This looks like a perfect spot for a relaxing vacation. Count me in! 🌴🍹",
    postId: 2,
    userId: 1,
  },
  {
    commentId: 7,
    text: "Gotcha🌞🏄‍♂️",
    postId: 2,
    userId: 2,
  },

  {
    commentId: 9,
    text: "Paradise found! Can't get enough of these stunning beaches. 🏖️",
    postId: 2,
    userId: 3,
  },
  {
    commentId: 10,
    text: "Enjoying la dolce vita in Italy! 🇮🇹 #ItalyAdventures #TravelGoals",
    postId: 3,
    userId: 3,
  },

  {
    commentId: 11,
    text: "It's my dream destination! 🇮🇹✨",
    postId: 3,
    userId: 1,
  },
  {
    commentId: 12,
    text: "Italy's rich history and stunning architecture always leave me in awe. Can't wait to explore it all! 🏰🇮🇹",
    postId: 3,
    userId: 2,
  },
  {
    commentId: 13,
    text: "The charm of Italy is truly unmatched. I fell in love with this country at first sight! ❤️🍝",
    postId: 3,
    userId: 3,
  },
  {
    commentId: 14,
    text: "The architecture, the food, the culture – Italy has it all! 🍕🍷",
    postId: 3,
    userId: 3,
  },
];
