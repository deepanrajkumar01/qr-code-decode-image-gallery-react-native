import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(App);
