import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../screens/Authorization/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";

const UnAuthorizationNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};

export default UnAuthorizationNavigator;

const styles = StyleSheet.create({});
