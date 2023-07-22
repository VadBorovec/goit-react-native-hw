// test
import React, { useState } from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import MapScreen from "./Screens/MapScreen";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostScreen from "./Screens/CreatePostScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CommentsScreen from "./Screens/CommentsScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSansThin: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Thin.ttf"),
    JosefinSansRegular: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Regular.ttf"),
    JosefinSansBold: require("./assets/fonts/Josefin_Sans/static/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ title: "Comments" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Location" }}
        />

        {/* !!! PostsScreen, CreatePostScreen, ProfileScreen
        - навігація через  createBottomTabNavigator ???*/}

        {/* <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: "Posts",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: "Create Post" }}
        /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
