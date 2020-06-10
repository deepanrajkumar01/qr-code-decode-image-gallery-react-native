# Sample app - Qr camera Scan,Image upload data reader
Decode qr data from images using react native. Can decode both android and IOS

https://github.com/deepanrajkumar01/react-native-qr-decode-image-camera

### Setup

`yarn install`

#### For android

```
yarn jetify
yarn start:android
```

#### For ios

```
cd ios
pod install
cd ..
yarn start:ios
```

### Image Upload

```
import React, { Component, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { QRreader } from "react-native-qr-decode-image-camera";
import ImagePicker from "react-native-image-picker";

const ImageUpload = () => {
  const [reader, setReader] = useState({});
  const [resData, setResData] = useState({});
  const openPhoto = () => {
    console.log("ImagePicker");
    ImagePicker.launchImageLibrary({}, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        if (response.uri) {
          var path = response.path;
          if (!path) {
            path = response.uri;
          }
          QRreader(path)
            .then((data) => {
              setResData(response);
              setReader({
                message: "message",
                data: data,
              }),
                setTimeout(() => {
                  setReader({
                    message: null,
                    data: null,
                  });
                }, 10000);
            })
            .catch((err) => {
              console.log("err", err);
              setReader({
                message: "Error",
                data: null,
              });
            });
        }
      }
    });
  };

  const styles = StyleSheet.create({
    container: {
      margin: 20,
    },
  });

  return (
    <View>
      <View style={styles.container}>
        <Text>Image upload</Text>
        <TouchableOpacity
          onPress={() => openPhoto()}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            height: 30,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Upload Image
          </Text>
        </TouchableOpacity>
        <View>
          {!reader ? (
            <Text>{!reader.message ? "" : `${reader.message}`}</Text>
          ) : (
            <Text>
              {!reader.message ? "" : `${reader.message}:${reader.data}`}
            </Text>
          )}
          {resData && (
            <View>
              <ScrollView>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    style={{ height: 200, width: 200 }}
                    source={{ uri: `data:image/png;base64,${resData.data}` }}
                  />
                </View>
                <Text>{JSON.stringify(resData, null, 2)}</Text>
              </ScrollView>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default ImageUpload;

```

### ScanQr Code

```
import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {QRscanner} from 'react-native-qr-decode-image-camera';

const Camera = ({flashMode, scanData}) => {
  const onRead = res => {
    console.log(res);
    scanData(res);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
  return (
    <View style={styles.container}>
      <QRscanner
        onRead={onRead}
        flashMode={flashMode}
        zoom={0}
        isShowScanBar={false}
        finderY={50}
        hintText=""
        renderBottomView={() => {}}
        bottomHeight={0}
        maskColor={'rgba(0, 0, 0, 0)'}
        cornerBorderWidth={0}
      />
    </View>
  );
};

export default Camera;

```

### Sample data

```
data {"bounds": {"height": 1080, "origin": [[Object], [Object], [Object], [Object]], "width": 1440}, "data": "Sample data", "rawData": "4154b617274686967612069732073657820717565656e0ec11ec11ec11ec11ec11ec", "target": 43, "type": "QR_CODE"}
```
