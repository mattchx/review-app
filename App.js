import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Button, TextInput } from "react-native";
import Home from "./screens/home";
export default function App() {
  const [name, setName] = useState("");

  const pressHandler = () => {
    setName("Matt");
    Alert.alert("Simple Button pressed");
  };
  return (
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
