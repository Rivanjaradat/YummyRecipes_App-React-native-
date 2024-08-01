import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'; // Correct import
import MealsFavTabDrawerNavigator  from './navigation/MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStore,combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  meals: mealsReducer
  // Add other reducers here if needed
});
const store=createStore(rootReducer);
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)} // Added error handling
      />
    );
  }
  return (
  
    <Provider store={store}>
    <MealsFavTabDrawerNavigator/>
    </Provider>

  );
}
