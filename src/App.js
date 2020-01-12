import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native';

const App = ({navigation}) => {
  const [TestState, setTestState] = useState('default');
  const updateState = () => {
    setTestState('stateChanged');
    navigation.navigate('Home');
  };
  const updateStateData = () => {
    setTestState('stateChanged');
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.buttonStyles} onPress={updateState}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('Camera')}>
          <Text>Camera Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('CheckCamera')}>
          <Text>CheckCamera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate('ScanQR')}>
          <Text>Scan QR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Button title="Change state" onPress={updateStateData} />
      </View>
      <View style={styles.mainContainer}>
        <Text>{TestState}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: '#ccc',
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainStyle: {
    backgroundColor: 'maroon',
  },
  mainContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
