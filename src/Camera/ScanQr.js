import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Camera from './Camera';

const ScanQr = () => {
  const styles = StyleSheet.create({
    container: {flex: 1},
    cameraContainer: {flex: 4},
    bottomContainer: {flex: 1},
  });

  const cameraScan = data => {
    console.log('data', data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera flashMode={false} scanData={cameraScan} />
      </View>
      <View style={styles.bottomContainer}>
        <Text>Sample Text</Text>
      </View>
    </View>
  );
};

export default ScanQr;
