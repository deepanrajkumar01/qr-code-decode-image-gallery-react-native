import React from 'react';
import {View, Text, Button} from 'react-native';

const Image = ({navigation}) => {
  return (
    <View>
      <Text>Image</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Image;
