import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainPage from './Components/MainPage';
import DictionaryPage from './Components/DictionaryPage';
export type StackScreens = {
  MainPage: undefined;
  DictionaryPage: undefined;
};
const Stack = createNativeStackNavigator<StackScreens>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="DictionaryPage" component={DictionaryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
