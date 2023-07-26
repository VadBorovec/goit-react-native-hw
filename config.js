// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "api-key", // my API key
  authDomain: "project-id.firebaseapp.com", // my domain name
  databaseURL: "https://project-id.firebaseio.com", // url
  projectId: "project-id", //
  storageBucket: "project-id.appspot.com", //
  messagingSenderId: "sender-id", //
  appId: "app-id", //
  measurementId: "G-measurement-id", //
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
