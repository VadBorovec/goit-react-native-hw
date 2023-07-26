// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC15CY8KeE6hwLjG5sWIa39IssQYkkGlo",
  authDomain: "socnetapp-ae36c.firebaseapp.com",
  databaseURL:
    "https://socnetapp-ae36c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socnetapp-ae36c",
  storageBucket: "socnetapp-ae36c.appspot.com",
  messagingSenderId: "462755268720",
  appId: "1:462755268720:web:e94a51dbda0b9ec8344cb5",
  measurementId: "G-HEZ2SWWRLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
