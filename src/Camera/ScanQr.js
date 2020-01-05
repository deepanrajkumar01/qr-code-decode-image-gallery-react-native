import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Camera from './Camera';

const ScanQr = () => {
  const styles = StyleSheet.create({
    header: {height: 50},
    container: {flex: 1},
    cameraContainer: {flex: 4},
    bottomContainer: {flex: 1},
  });

  const cameraScan = data => {
    console.log('data', data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Sample text</Text>
      </View>
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
