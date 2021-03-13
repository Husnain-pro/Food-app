import React, { useLayoutEffect, useState } from 'react';
import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ route, navigation }) => {
	const { categoryId } = route.params;
	const selectedCategory = CATEGORIES.find((c) => c.id === categoryId);
	const displayMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
	const [value, onChangeText] = useState(selectedCategory.title);
	useLayoutEffect(() => {
		navigation.setOptions({
			title: value === '' ? 'Category Meal Screen' : value
		});
	}, [navigation, value]);

	return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMealsScreen;
