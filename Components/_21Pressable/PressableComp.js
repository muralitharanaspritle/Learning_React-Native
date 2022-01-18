import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
export default function PressableComp() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>Count:{count}</Text>
      <Pressable
        onPress={increment}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "red" : "yellow" },
        ]}
      >
       {({pressed})=><Text>{pressed?"Pressed":'press me'}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    width:200
  },
});
