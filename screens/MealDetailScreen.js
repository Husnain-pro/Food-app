import React, { useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

const ListItem = (props) => {
	return (
		<View style={styles.listItem}>
			<Text>{props.children}</Text>
		</View>
	);
};

const MealDetailScreen = ({ route, navigation }) => {
	const { categoryId } = route.params;
	const selectedMeal = MEALS.find((c) => c.id === categoryId);
	const [value, onChangeText] = useState(selectedMeal.title);
	useLayoutEffect(() => {
		navigation.setOptions({
			title: value === '' ? 'Category Meal Screen' : value,
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Favorite" iconName="ios-star" onPress={() => alert('search')} />
				</HeaderButtons>
			)
		});
	}, [navigation, value]);
	return (
		<ScrollView>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<View style={styles.details}>
				<Text>{selectedMeal.duration}m</Text>
				<Text>{selectedMeal.complexity.toUpperCase()}</Text>
				<Text>{selectedMeal.affordability.toUpperCase()}</Text>
			</View>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((ingredient) => (
				<ListItem key={ingredient}>{ingredient}</ListItem>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((step) => (
				<ListItem key={step}>{step}</ListItem>
			))}
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		textAlign: 'center'
	},
	listItem: {
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		padding: 10
	}
});
