import React from "react";
import { View,TouchableOpacity,Text ,Alert} from "react-native";
import styles from "./Style";
export default function CustomButton(props) {
    const alertFunction=()=>{
        Alert.alert("Custom Button","Are you sure?",[
            {text:"Yes",onPress:()=>alert("Yes pressed")},
            {text:"No",onPress:()=>alert("No pressed")}
        ])
    }
  return (
      <View>
          <TouchableOpacity onPress={alertFunction}> 
              <View style={styles.button}>
                  <Text style={styles.buttonTitle}>{props.title}</Text>
              </View>
          </TouchableOpacity>
      </View>
  );
}
