import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";

const SubmitButton = ({ handleSubmit, btnTitle }) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          color: "#fff",
          backgroundColor: "#e50914",
          marginTop: 30,
          paddingVertical: 8,
          marginHorizontal: 16,
          textAlign: "center",
          borderRadius: 10,
          fontSize: 20,
        }}
      >
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
