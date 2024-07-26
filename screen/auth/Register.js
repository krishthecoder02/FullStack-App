import { View, Text, StyleSheet, StatusBar } from "react-native";

import React, { useState } from "react";
import InputBox from "../../component/InputBox";
import SubmitButton from "../../component/SubmitButton";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#6a51ae"
        hidden={false}
      />
      <View style={styles.container}>
        <Text style={styles.maintext}>Register</Text>
        <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
          <InputBox inputTitle={"Name"} value={name} setValue={setName} />
          <InputBox inputTitle={"E-Mail"} value={email} setValue={setEmail} />
          <InputBox
            inputTitle={"Password"}
            secureTextEntry={true}
            value={password}
            setValue={setPassword}
          />
        </View>
        <SubmitButton btnTitle={"Submit"} />
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

export default Register;
