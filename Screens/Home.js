import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
// Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Icons
import { Feather } from "@expo/vector-icons";
// Screens
import PostsScreen from "./mainScreens/PostsScreen";
import CreatePostScreen from "./mainScreens/CreatePostScreen";
import ProfileScreen from "./mainScreens/ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tabs.Navigator
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
      <Tabs.Screen
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
      <Tabs.Screen
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
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
