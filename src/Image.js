import React from 'react';
import {View, Text, Button} from 'react-native';

const Image = ({navigation}) => {
  return (
    <View>
      <Text>Image</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to ScanQr"
        onPress={() => navigation.navigate('ScanQR')}
      />
      <Button
        title="Go to Check Scan QR"
        onPress={() => navigation.navigate('CheckCamera')}
      />
    </View>
  );
};

export default Image;
