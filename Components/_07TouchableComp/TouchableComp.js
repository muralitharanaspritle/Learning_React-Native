import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
export default function TouchableComp() {
  const [people, setPeople] = useState([
    { key: 1, name: "Muralitharan" },
    { key: 2, name: "Kannan" },
    { key: 3, name: "Ragavan" },
  ]);
  const pressHandler=(name)=>{
      alert(name)
  }
  return (
    <View style={styles.top}>
      <FlatList
        data={people}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity>
                <Text onPress={()=>pressHandler(item.name)} style={styles.touch}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    backgroundColor: "yellow",
    margin: 10,
    height: 50,
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
  },
  top: {
    marginTop: 30,
  },
});
