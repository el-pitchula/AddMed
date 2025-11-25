import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ScheduleScreen from "../screens/Schedule/ScheduleScreen";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Schedule: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
