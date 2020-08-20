import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { QRscanner } from "react-native-qr-decode-image-camera";
import Modal from "react-native-modal";

const CheckCamera = ({ navigation }) => {
  const [cameraStatus, setCameraStatus] = useState(true);
  const [ScanData, setScanData] = useState({});
  const [RepeatScan, setRepeatScan] = useState(true);
  const [flashMode, setflashMode] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);

  const onRead = (res) => {
    // console.log(res);
    setScanData(res);
    setRepeatScan(false);
    navigation.navigate("Image");
  };
  const toggleModal = () => {
    setisModalVisible(!isModalVisible);
    setRepeatScan(false);
  };
  const toggleModalBack = () => {
    setisModalVisible(!isModalVisible);
    setRepeatScan(true);
  };

  const resetData = (payload) => {
    console.log("didFocus", payload);
    setRepeatScan(true);
  };
  const checkImage = () => {
    navigation.navigate("Image");
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eee",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <If condition={cameraStatus}>
          <QRscanner
            isRepeatScan={RepeatScan}
            onRead={onRead}
            flashMode={flashMode}
            zoom={0}
            isShowScanBar={false}
            finderY={50}
            hintText=""
            renderBottomView={() => {}}
            bottomHeight={0}
            maskColor={"rgba(0, 0, 0, 0)"}
            cornerBorderWidth={0}
          />
        </If>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <Text>{JSON.stringify(ScanData, null, 2)}</Text>
          <Text>Sample</Text>
        </ScrollView>
      </View>
      <Button title="Show modal" onPress={toggleModal} />
      <Button title="Go to Image" onPress={checkImage} />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModalBack} />
        </View>
      </Modal>
    </View>
  );
};

export default CheckCamera;
