import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const APICall = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    callAPI();
  }, []);
  function callAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"GET"
    })
      .then((res) => res.json())
      .then((res) => setData([res]))
      .catch((err) => console.error(err));
  }

  /**
   * aynsc function callAPI(){
   * try{
   *    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
   *    let dataObj = await data.json();
   *    setData([dataObj])
   * }
   * catch(err){
   *    console.error(err)
   * }
   * }
   */
  return (
    <View>
      {data.map((value) => {
        return (
          <View key={value.id}>
            <Text style={styles.text}>{value.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default APICall;

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 20,
  },
});
