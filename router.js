import React from "react";
// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";
// components
import { Feather } from "react-native-vector-icons";
import { Alert, TouchableOpacity } from "react-native";
//! for logout !useDispatch throws an error if used from this file
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "./redux/auth/authOperations";
// import { selectIsLoading, selectError } from "./redux/auth/authSelectors";

// Auth Screens
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
// Main Screens
import Home from "./Screens/mainScreens/Home";
import CreatePostScreen from "./Screens/mainScreens/CreatePostScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth, navigation) => {
  // !useDispatch throws an error if used from this file
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

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
      </AuthStack.Navigator>
    );
  }
  // If the user is already logged in, he will be directed to home screen with all other
  console.log("Authenticated");

  return (
    <MainTab.Navigator
      initialRouteName="Home"
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
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log("Press LogOut Button");
                Alert.alert("LogOut works from Profile Screen");
                // !useDispatch throws an error if used from this file
                // dispatch(logout());
              }}
            >
              <Feather name="log-out" color={"#BDBDBD"} size={24} />
            </TouchableOpacity>
          ),
        }}
        name="Home"
        component={Home}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
        name="CreatePost"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
