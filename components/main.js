import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
// redux
import { authStateCahngeUser } from "../redux/auth/authOperations";

export default function Main() {
  const { stateChange } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  const routing = useRoute(stateChange);

  useEffect(() => {}, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
