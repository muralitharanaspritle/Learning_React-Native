import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import DateField from "react-native-datefield";

const DateInputComp = () => {
  const [dateOfBirth, setDateOfBrith] = useState("");
  return (
    <View>
      <DateField
        onSubmit={(value) => setDateOfBrith(value.toString())}
        containerStyle={{
          padding: 10,
          height: 50,
          margin: 10,
          width: 300,
        }}
        styleInput={{ fontSize: 20 }}
      />

      <Text>{dateOfBirth}</Text>

      {/* <DateField
        labelDate="date"
        labelMonth="month"
        labelYear="year"
        onSubmit={(value) => console.log(value)} 
      /> */}

      {/* <DateField
        disabled={true}
        defaultValue={new Date()}
        styleInput={{ fontSize: 15 }}
        containerStyle={{ marginVertical: 30,height:50,padding:10 }}
      /> */}
    </View>
  );
};

export default DateInputComp;

const styles = StyleSheet.create({});
