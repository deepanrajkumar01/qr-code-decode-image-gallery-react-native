import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Camera from './Camera';
import {NavigationActions} from 'react-navigation';

const ScanQr = ({navigation}) => {
  navigation.reset();
  const [CameraData, setCameraData] = useState({});
  const styles = StyleSheet.create({
    container: {flex: 1},
    cameraContainer: {flex: 4},
    bottomContainer: {flex: 1},
  });

  const cameraScan = data => {
    console.log('data', data);
    setCameraData(data);
    navigation.navigate('Image');
  };
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera flashMode={false} scanData={cameraScan} />
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView>
          <Text>{JSON.stringify(CameraData, null, 2)}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ScanQr;
