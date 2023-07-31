// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyBC15CY8KeE6hwLjG5sWIa39IssQYkkGlo",
//   authDomain: "socnetapp-ae36c.firebaseapp.com",
//   databaseURL:
//     "https://socnetapp-ae36c-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "socnetapp-ae36c",
//   storageBucket: "socnetapp-ae36c.appspot.com",
//   messagingSenderId: "462755268720",
//   appId: "1:462755268720:web:e94a51dbda0b9ec8344cb5",
//   measurementId: "G-HEZ2SWWRLQ",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCjZNnYPumdZPW24kwgjC1bGooMkLaDpug",
  authDomain: "rn-social-723d0.firebaseapp.com",
  databaseURL:
    "https://rn-social-723d0-default-rtdb.firebaseio.com",
  projectId: "rn-social-723d0",
  storageBucket: "rn-social-723d0.appspot.com",
  messagingSenderId: "1015239931470",
  appId: "1:1015239931470:web:27d4f5b9d35e1bd2c3351f",
  measurementId: "G-C6TTCY1F5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
