import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
function Comp2(props) {
  return (
    <View style={styles.myProp}>
      <Text style={styles.text}>{props.myName}</Text>
      <Button title="change name" onPress={props.changeName} />
    </View>
  );
}
const styles = StyleSheet.create({
  myProp: {
    backgroundColor: "red",
    height: 100,
    width: 200,
    borderRadius: 5,
    display:"flex",
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
      color:'yellow',
      fontWeight:"bold",
      fontSize:20
  }
});
export default Comp2;
