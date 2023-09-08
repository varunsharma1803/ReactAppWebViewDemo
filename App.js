import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import MyCarePage from './screens/MyCarePage';
import WebViewScreen from './screens/WebViewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyCarePage" component={MyCarePage} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
