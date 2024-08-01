import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList, Platform } from "react-native";
import {useSelector} from'react-redux';
import { CATEGORIES} from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen =props => {
  
  const route = useRoute();
  const navigation = useNavigation();
  const catId = route.params.categoryId;

 

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const availableMeals = useSelector(state => state.meals.filteredMeals);


  const displayedMeals = availableMeals .filter(meal => {
  
    return meal.categoryIds && meal.categoryIds.includes(catId);
  });


if(
  displayedMeals.length === 0){
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    });
  }, [navigation, selectedCategory]);

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
