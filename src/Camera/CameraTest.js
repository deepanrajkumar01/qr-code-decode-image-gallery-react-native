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
