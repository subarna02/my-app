import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import FloatingView from "../../components/FloatingView";
import { LinearGradient } from "expo-linear-gradient";
const Login = () => {
  const [secureTextShown, setSecureTextShown] = useState(false);
  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.9)"]}
        style={styles.container}
      >
        <KeyboardAvoidingView
          behavior="height"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Email" style={styles.textInput} />
              <Ionicons
                name="mail"
                size={24}
                color="black"
                style={styles.icon}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={!secureTextShown}
                onChangeText={(text) => console.log(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setSecureTextShown(!secureTextShown);
                }}
              >
                <Ionicons
                  name={secureTextShown ? "eye" : "eye-off"}
                  size={24}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  textDecorationLine: "underline",
                  marginBottom: 10,
                }}
              >
                Forgot Password
              </Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loginContainer: {
    width: "90%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    padding: moderateScale(15),
    backgroundColor: "white",
    borderRadius: 10,
    position: "relative",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 6,
    height: verticalScale(40),
    paddingHorizontal: moderateScale(5),
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
  },
  loginBtn: {
    backgroundColor: "#303030",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    height: verticalScale(40),
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
  },
});
