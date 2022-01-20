import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const login=()=>{
      if(userName === "Muralitharan" && password === "12345"){
          //go inside
          navigation.navigate("COMP1",{
              username:userName,
              password:password
          })
        // navigation.reset({
        //     index:0,
        //     routes:[{name:"COMP1"}]
        // })
      }else{
          //invalid alert
          Alert.alert("Invalid", "Please enter valid username and password",[
              {text:"Ok",onPress:()=>null}
          ])
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setUserName(text)}
        value={userName}
        placeholder="Enter your username"
        type
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Enter your Password"
        secureTextEntry
      />
      <View>
          <Button title="Login" onPress={login} />
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  text: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "skyblue",
    width: 200,
    padding: 10,
    borderRadius: 5,
    marginBottom:10
  },
});
