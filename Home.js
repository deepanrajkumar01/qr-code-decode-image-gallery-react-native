import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {QRreader} from 'react-native-qr-decode-image-camera';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Home = () => {
  const [open, setOpen] = useState('');
  const [responseData, setResponseData] = useState({});
  const [newData, setNewData] = useState('');
  const pickImage = () => {
    setOpen('open');

    // ==============

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response.path);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setResponseData(response);
        QRreader(Platform.OS === 'ios' ? response.uri : response.path).then(
          data => {
            console.log('data', data);
            setNewData(data);
          },
        );
      }
    });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <View style={styles.main}>
          <View />
          <View>
            <Text style={styles.labelText}>
              Image picker {open && '-' + open}
            </Text>
            <TouchableOpacity
              style={styles.btnNew}
              activeOpacity={0.9}
              onPress={pickImage}>
              <Text style={styles.btn}>Scan Qr</Text>
            </TouchableOpacity>
            <Image
              source={{uri: 'data:image/jpeg;base64,' + responseData.data}}
              style={styles.uploadAvatar}
            />
            <Text>{newData}</Text>
          </View>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
              <Text>Test</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'pink',
    display: 'flex',
    flex: 1,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  scrollView: {
    margin: 20,
  },
  labelText: {
    fontSize: 40,
    marginVertical: 20,
    fontWeight: '100',
  },
  uploadAvatar: {
    height: 200,
    width: 200,
  },
  btn: {
    backgroundColor: 'maroon',
    color: 'white',
    fontSize: 18,
    margin: 40,
    padding: 10,
    textAlign: 'center',
  },
  btnNew: {},
});

export default Home;
