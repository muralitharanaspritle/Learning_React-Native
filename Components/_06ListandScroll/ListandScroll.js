import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList,ScrollView } from "react-native";




// with flatlist need not wrap inside a scroll component
export default function ListandScroll() {
  const [list, setList] = useState([
    { key: 1, car: "BMW" },
    { key: 2, car: "VW" },
    { key: 3, car: "BENZ" },
    { key: 4, car: "Volvo" },
    { key: 5, car: "VW" },
    { key: 6, car: "BENZ" },
    { key: 7, car: "Volvo" },
    { key: 8, car: "VW" },
    { key: 9, car: "BENZ" },
    { key: 10, car: "Volvo" },
    { key: 11, car: "VW" },
    { key: 12, car: "BENZ" },
    { key: 13, car: "Volvo" },
    { key: 14, car: "Volvo" },
    { key: 15, car: "VW" },
    { key: 16, car: "BENZ" },
    { key: 17, car: "Volvo" },
    { key: 18, car: "Volvo" },
    { key: 19, car: "VW" },
    { key: 20, car: "BENZ" },
    { key: 21, car: "Volvo" },
  ]);
  return (
    <View>
      {/* <FlatList
      //keyExtractor
        data={list}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={styles.list}>{item.car}</Text>
            </View>
          );
        }}
      /> */}

      <ScrollView>
      {list.map((value) => {
          return (
            <Text style={styles.list} key={value.key}>
              {value.car}
            </Text>
          );
        })}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "red",
    margin: 5,
    padding: 5,
    borderRadius: 5,
    color: "white",
    height:50
  },
});
