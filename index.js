import {AppRegistry} from 'react-native';
import {name as appName} from './src/app.json';
import AppNavigator from './src/AppNavigator.js';

AppRegistry.registerComponent(appName, () => AppNavigator);
