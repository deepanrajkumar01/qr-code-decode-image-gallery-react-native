import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import App from './App';

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
});

export default createAppContainer(AppNavigator);
