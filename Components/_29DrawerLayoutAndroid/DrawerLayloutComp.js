import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";

//do  not wrap DrawerLayoutAndriod inside a view comp

export default function DrawerLayloutComp() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => {
    return (
      <View style={([styles.container, styles.navigationContainer])}>
        <Text style={styles.paragraph}>I am in the drawer</Text>
        <Button
          title="close drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
      </View>
    );
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
     <View style={styles.container}>
        <Text style={styles.paragraph}>Drawer on the {drawerPosition}</Text>
        <Button
          title="change position"
          onPress={() => changeDrawerPosition()}
        ></Button>
        <Text style={styles.paragraph}>
          Swipe friom the side or press the button{" "}
        </Text>
        <Button
          title="open"
          onPress={() => drawer.current.openDrawer()}
        ></Button>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    backgroundColor: "yellow",
  },
  paragraph: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
