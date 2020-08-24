import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  Linking,
} from "react-native";
// import { QRscanner } from "react-native-qr-decode-image-camera";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";

const RnQrScan = ({ navigation }) => {
  const [cameraStatus, setCameraStatus] = useState(true);
  const [ScanData, setScanData] = useState({});
  const [RepeatScan, setRepeatScan] = useState(true);
  const [flashMode, setflashMode] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);

  const onRead = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
    setScanData(e);
    setRepeatScan(false);
  };

  return (
    <View>
      <QRCodeScanner
        onRead={onRead}
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </View>
  );
};

export default RnQrScan;
