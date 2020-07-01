import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import App from "./App";
import Camera from "./Camera/Camera";
import ScanQr from "./Camera/ScanQr";
import Image from "./Image";
import CheckCamera from "./Camera/CheckCamera";
import ImageUpload from "./Upload/ImageUpload";
import ScrollTab from "./ScrollTab/ScrollTab";
import Demo from "./Demo/Demo";

const AppNavigator = createStackNavigator(
  {
    App: App,
    Home: Home,
    ImageUpload: ImageUpload,
    Image: Image,
    Camera: Camera,
    ScanQR: ScanQr,
    CheckCamera: CheckCamera,
    ScrollTab: ScrollTab,
    Demo: Demo,
  },
  {
    initialRouteName: "App",
  }
);

export default createAppContainer(AppNavigator);
