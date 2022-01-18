import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
export default function TextInputComp() {
  const [details, setDetails] = useState({
    name: "",
    age: 0,
  });
  const [data, setData] = useState({ data: [] });
  const submit = () => {
    data.data.push(details);
    setData({ ...data });
    setDetails;
  };
  return (
    <View style={styles.formContainer}>
      <Text>My name :{details.name}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setDetails({ ...details, name: text })}
        placeholder="Enter your Name"
      />
      <Text>My age:{details.age}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setDetails({ ...details, age: text })}
        placeholder="Enter your age"
        keyboardType="numeric"
      />
      <Button title="submit" onPress={submit}></Button>

      <Text>
        {data.data.map((value) => (
          <Text key={value.name}>
            {value.name}-{value.age}
          </Text>
        ))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "blue",
    height: 200,
    display: "flex",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "pink",
    width: "90%",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
  },
});
