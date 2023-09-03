import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Deshboard from './components/deshboard';
import MainScreen from './screens/mainScreen';
import Tabs from './components/tabs';

// Define your custom dark theme with custom colors
const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#424242',
    background: '#424242', 
   
  },
};

const App = ({ navigation, route }: any) => {
  return (
    <NavigationContainer theme={customDarkTheme}>
      <MainScreen navigation={navigation} route={route} />
      <Tabs/>
    </NavigationContainer>
  );
};

export default App;
