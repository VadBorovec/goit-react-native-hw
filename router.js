import React from "react";
// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
// components
import { Feather } from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
// Auth Screens
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/Home";
// Main Screens
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import CreatePostScreen from "./Screens/mainScreens/CreatePostScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";
// Nested Screens
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen";
import MapScreen from "./Screens/nestedScreens/MapScreen";

const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

export const useRoute = (isAuth, navigation) => {
  if (!isAuth) {
    // Not authenticated user can only see login and registration screens
    console.log("Not Authenticated");
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ title: "Comments" }}
        />
        <AuthStack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Location" }}
        />
      </AuthStack.Navigator>
    );
  }
  // If the user is already logged in, he will be directed to home screen with all other
  console.log("Authenticated");
  return (
    <MainTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#212121",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: { height: 83 },
        tabBarIcon: { focused: true, color: "#FFFFFF", size: 24 },
        headerStyle: { height: 88 },
        headerTitleStyle: {
          fontFamily: "JosefinSansBold",
          fontSize: 18,
          fontWeight: 500,
          lineHeight: 22,
        },
        headerTitleAlign: "center",
        headerTintColor: "#212121",
        headerRightContainerStyle: {
          paddingRight: 16,
          paddingBottom: 10,
        },
        headerLeftContainerStyle: {
          paddingLeft: 16,
          paddingBottom: 10,
        },
      }}
    >
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Press LogOut Button");
                //   dispatch(logout()); // not implemented yet
                navigation.navigate("Login");
              }}
            >
              <Feather name="log-out" color={"#BDBDBD"} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTabs.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus" color={color} size={size} />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Press Back Button");
                navigation.navigate("Posts");
              }}
            >
              <Feather name="arrow-left" color={"#212121"} size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
};
