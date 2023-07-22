import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Nested Screens
import DefaultPostsScreen from "../nestedScreens/DefaultPostsScreen";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedStack = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedStack.Navigator initialRouteName="Default">
      <NestedStack.Screen
        name="Default"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Comments" }}
      />
      <NestedStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Location" }}
      />
    </NestedStack.Navigator>
  );
}
