import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardContainer from './containers/DashboardContainer';
const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Dashboard" component={DashboardContainer} />
            </Stack.Navigator> 
        </NavigationContainer>
    );
  }