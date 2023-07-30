import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
// firebase
import { auth } from "./firebase/config";

const Main = () => {
  const [user, setUser] = useState(null);

  const state = useSelector((state) => state);
  console.log(state);

  auth.onAuthStateChanged((user) => setUser(user));

  const routing = useRoute(user);

  useEffect(() => {}, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
