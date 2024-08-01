import React, { useLayoutEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'; // Assuming you have a Colors file in constants
import CategoryGridTile from '../components/CategoryGridTile';
import Icon from "react-native-vector-icons/Ionicons";

const CategoriesScreen = props => {
    const navigation = useNavigation();

   

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate(
                        'CategoryMeals',
                        {
                            categoryId: itemData.item.id
                        }
                    );
                }}
            />
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;
