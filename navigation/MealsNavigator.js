import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo-vector-icons installed
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FiltersScreen from '../screens/FiltersScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Meal Categories' }}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{ title: 'Meal Detail' }}
      />
    </Stack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Meals') {
            iconName = 'restaurant';
          } else if (route.name === 'Favorites') {
            iconName = 'star';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.accentColor,
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // Hides the header from the tab navigator
      })}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{ title: 'Meals' }} // Title for the bottom tab
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favorites!' }} // Title for the bottom tab
      />
    </Tab.Navigator>
  );
};

const MealsFavTabDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="MealsFav" 
          component={MealsFavTabNavigator} 
          options={{ title: 'Meals & Favorites' }} // Custom title for the drawer screen
        />
        <Drawer.Screen 
          name="Filters" 
          component={FiltersScreen} 
          options={{ title: 'Filter Meals' }} // Custom title for the drawer screen
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MealsFavTabDrawerNavigator;
