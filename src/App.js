import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ImageUpload from "./Upload/ImageUpload";
import CheckCamera from "./Camera/CheckCamera";
import CameraTest from "./Camera/CameraTest";
import Camera from "./Camera/Camera";
import RnQrScan from "./Camera/RnQrScan";
import Demo from "./ScrollTab/Demo";
import Tabs from "./Tabs/Tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gallery" component={ImageUpload} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="CheckCamera" component={CheckCamera} />
        <Stack.Screen name="CameraTest" component={CameraTest} />
        <Stack.Screen name="RnQrScan" component={RnQrScan} />
        <Stack.Screen name="ScrollTabs" component={Demo} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
