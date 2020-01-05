import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ScanQr from './Camera/ScanQr';

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScanQr />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: 'yellow',
  },
  mainContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: 'green',
  },
});
