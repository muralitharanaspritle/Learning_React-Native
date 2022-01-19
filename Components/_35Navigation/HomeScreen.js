import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HOME PAGE</Text>
      <View style={styles.button}>
        <Button
          title="Product"
          onPress={() => navigation.navigate("Product")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Category"
          onPress={() => navigation.navigate("Category")}
        />
      </View>
    </View>
  );
}
