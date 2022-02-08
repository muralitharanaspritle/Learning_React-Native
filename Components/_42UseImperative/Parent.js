import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect,useRef } from "react";
import Child from "./Child";
import { Button } from "react-native";

const Parent = () => {
  const [count, setCount] = useState(0);
  const childRef = useRef(null);
  useEffect(()=>{
    console.log(childRef)
  },[])
  useEffect(()=>{
      console.log("Parent")
  })
  return (
    <View> 
      <Child count={count} ref={childRef} />
      <Button title="inc" onPress={() => childRef.current.incCount()} />
    </View>
  );
};

export default Parent; 

const styles = StyleSheet.create({}); 
