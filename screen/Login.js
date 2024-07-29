import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";

import React, { useState } from "react";
import InputBox from "../../component/InputBox";
import SubmitButton from "../../component/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    try {
      if (!email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log("Register date ==>", { email, password });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6a51ae"
        hidden={false}
      />
      <View style={styles.container}>
        <Text style={styles.maintext}>Login</Text>
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
          <InputBox inputTitle={"E-Mail"} value={email} setValue={setEmail} />
          <InputBox
            inputTitle={"Password"}
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </View>
        <SubmitButton
          btnTitle={"Login"}
          loading={loading}
          handleSubmit={handleSubmit}
        />
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "#fff" }}>
            Register Your Self,{"   "}
            <Text
              style={{ color: "#00bfff", fontSize: 17 }}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  maintext: {
    fontSize: 35,
    color: "#11a9c0",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0f101d",
  },
});

export default Login;

