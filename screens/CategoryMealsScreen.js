import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = ({ route, navigation }) => {
	const availableMeals = useSelector((state) => state.meals.filteredMeals);
	const { categoryId } = route.params;
	const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);
	const displayMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
	const [value, onChangeText] = useState(selectedCategory.title);
	useLayoutEffect(() => {
		navigation.setOptions({
			title: value === '' ? 'Category Meal Screen' : value
		});
	}, [navigation, value]);

	return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
