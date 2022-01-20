import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text, View} from "react-native"
function Comp1() {
    const route = useRoute();
  return (
      <View>
          <Text>
              This is Comp1
              UserName:{route.params.username}
          </Text>
      </View>
  );
}

export default Comp1;
