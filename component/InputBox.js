import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const InputBox = ({ inputTitle, secureTextEntry, value, setValue }) => {
  return (
    <View>
      <Text
        style={{ color: "#fff", fontSize: 15, marginBottom: 10, marginTop: 10 }}
      >
        {inputTitle}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter.... "
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    fontSize: 16,
  },
});

export default InputBox;
