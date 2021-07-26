import { registerRootComponent } from "expo";
import App from "./App";


registerRootComponent(App);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
/*

import { name as appName } from "./app.json";
import { AppRegistry, Platform } from "react-native";

if (Platform.OS == "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

*/