import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import App from './App';
import Camera from './Camera/Camera';
import ScanQr from './Camera/ScanQr';
import Image from './Image';

const AppNavigator = createStackNavigator(
  {
    App: App,
    Home: Home,
    Image: Image,
    Camera: Camera,
    ScanQR: ScanQr,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppNavigator);
