import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
const LockScreen = ({ onRetry }) => {
  return (
    <LinearGradient colors={[
      "rgba(0,0,0,0.5)",
      "rgba(0,0,0,0.7)",
      "rgba(0,0,0,0.9)",
    ]} style={styles.container}>
      <Ionicons name="lock-closed" size={100} color="white" />
      <Text style={styles.text}>Your app is locked</Text>
      <Pressable onPress={onRetry}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.openBtn}
        >
          <MaterialIcons name="fingerprint" size={45} color="white" />
        </LinearGradient>
      </Pressable>
    </LinearGradient>
  );
};

export default LockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginVertical: 20,
  },
  openBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
    // backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
    borderRadius: 50,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // width: "60%",
  },
});
