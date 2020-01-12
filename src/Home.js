import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button title="Go to App" onPress={() => navigation.navigate('App')} />
    </View>
  );
};

export default Home;
