import React, { useState } from "react";
import { Text, View, TextInput, Appearance ,useColorScheme} from "react-native";
export default function AppearanceComp() {
  const colorScheme = Appearance.getColorScheme();
  console.log(useColorScheme())
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  console.log(colorScheme);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: colorScheme === "light" ? "pink" : "yellow",
      }}
    >
      <TextInput
        style={{
          marginTop: 20,
          width: 200,
          backgroundColor: colorScheme === "light" ? "red" : "pink",
          color: colorScheme === "light" ? "black" : "white",
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={{
          marginTop: 20,
          width: 200,
          backgroundColor: colorScheme === "light" ? "red" : "pink",
          color: colorScheme === "light" ? "black" : "white",
        }}
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <Text
        style={{
          fontSize: 20,
          color: colorScheme === "light" ? "black" : "white",
        }}
      >
        {name}-{age}
      </Text>
    </View>
  );
}
