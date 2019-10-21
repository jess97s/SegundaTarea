/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import pantallaContainer from './src/pantallas/pantalla-container';

AppRegistry.registerComponent(appName, () => pantallaContainer);
