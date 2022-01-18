import React from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";
export default function SectionListComp() {
  const dataList = [
    {
      title: "cars",
      data: ["BMW", "BENZ", "VOLVO"],
    },
    {
      title: "Fruits",
      data: ["Apple", "Orange", "Banana"],
    },
    {
      title: "Fruit",
      data: ["Apple", "Orange", "Banana"],
    },
  ];
  const Item = ({ title }) => {
    console.log(title);
    return (
      <View style={styles.sectionItems}>
        <Text>{title}</Text>
      </View>
    );
  };
  return (
    <View style={{marginTop:100}}>
      <SectionList
        sections={dataList}
        keyExtractor={(items, index) => {
          return items + index;
        }}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => {
          return <Text style={styles.title}>{title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  sectionItems: {
    backgroundColor: "yellow",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: 300,
  },
});
