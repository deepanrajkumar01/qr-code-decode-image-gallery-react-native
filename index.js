import {AppRegistry} from 'react-native';
import {name as appName} from './src/app.json';
import App from './src/App';
import AppNavigator from './src/AppNavigator.js';

AppRegistry.registerComponent(appName, () => AppNavigator);
