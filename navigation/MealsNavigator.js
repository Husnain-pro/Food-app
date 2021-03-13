import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import FilterScreen from '../screens/FilterScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();

const MealsNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Meal Categories" component={CategoriesScreen} options={stackOptions} />
			<Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={stackOptions} />
			<Stack.Screen name="MealDetail" component={MealDetailScreen} options={stackOptions} />
		</Stack.Navigator>
	);
};

//.......Filtet Navigator ........//
const FilterNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Filter" component={FilterScreen} options={stackOptions} />
		</Stack.Navigator>
	);
};

// ..........FAVORITE NAVIGATOR..............//

const FavNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Your Favorites" component={FavouriteScreen} options={stackOptions} />
			<Stack.Screen name="MealDetail" component={MealDetailScreen} options={stackOptions} />
		</Stack.Navigator>
	);
};

// .......BOTTOM TABS..........//
const Tab = createMaterialBottomTabNavigator();

const MealsFavTabNavigator = () => {
	return (
		<Tab.Navigator initialRouteName="Feed" activeColor="#2c0a16" barStyle={{ backgroundColor: 'tomato' }}>
			<Tab.Screen
				name="Meals"
				component={MealsNavigator}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name="ios-restaurant" color={color} size={25} />
				}}
			/>
			<Tab.Screen
				name="Favorite"
				component={FavNavigator}
				options={{
					tabBarIcon: ({ color }) => <Ionicons name="ios-star" color={color} size={25} />
				}}
			/>
		</Tab.Navigator>
	);
};

// .......NAVIGATION DRAWER...........//
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Meals"
			drawerContentOptions={{
				activeTintColor: '#e91e63',
				labelStyle: {
					fontFamily: 'open-sans-bold'
				}
			}}
		>
			<Drawer.Screen name="Meals" component={MealsFavTabNavigator} />
			<Drawer.Screen name="Filter" component={FilterNavigator} />
		</Drawer.Navigator>
	);
};

const stackOptions = {
	headerTintColor: 'white',
	headerStyle: { backgroundColor: Platform.OS === 'web' ? 'black' : Colors.primaryColor }
};
export default MainNavigator;
