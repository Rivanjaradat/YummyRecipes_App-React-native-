import React, { useLayoutEffect } from 'react';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet,View,Text } from 'react-native';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DefaultText from '../components/DefaultText';
const FavoritesScreen = () => {
  const availableMeals = useSelector(state => state.meals.meals);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Your Favorites',
     
    });
  }, [navigation]);

  const favMeals = useSelector( 
    state => state.meals.favoriteMeals
  );
if (favMeals.length===0||!favMeals){
  return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <DefaultText>No favorite meals found. Start adding some!</DefaultText>
  </View>
}
  

  return <MealList listData={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 15,
  },
});

export default FavoritesScreen;
