import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { MyState } from "./ContextAPIComp";
const Comp3 = () => {
  const receivingState = useContext(MyState);
  console.log(receivingState)
  return (
    <View>
      <Text>
        <FlatList
          data={receivingState.data}
          keyExtractor={(item,index)=>item+index}
          renderItem={(items, index) => {
              console.log(items)
            return (
              <View>
                <Text style={styles.text}>{items.item}</Text>
              </View>
            );
          }}
        />
      </Text>
      <Button  title="change value" onPress={()=>receivingState.changeMyValue()}/>
    </View>
  );
};

export default Comp3;

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
});
