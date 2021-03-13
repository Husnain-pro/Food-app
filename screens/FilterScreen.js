import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';

const FilterSwitch = (props) => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.title}</Text>
			<Switch value={props.value} onValueChange={props.onChange} />
		</View>
	);
};

const FilterScreen = ({ navigation }) => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVeganFree, setIsVeganFree] = useState(false);
	const [isVegeterian, setIsvegetarian] = useState(false);
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Favorite" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
				</HeaderButtons>
			),
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Save" iconName="ios-save" onPress={() => navigation.toggleDrawer()} />
				</HeaderButtons>
			)
		});
	}, [navigation]);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Availabe Filter / Restrictions</Text>
			<FilterSwitch
				value={isGlutenFree}
				onChange={(newValue) => {
					setIsGlutenFree(newValue);
				}}
				title="Gluten - Free"
			/>
			<FilterSwitch
				value={isLactoseFree}
				onChange={(newValue) => {
					setIsLactoseFree(newValue);
				}}
				title="Lactose - Free"
			/>
			<FilterSwitch
				value={isVeganFree}
				onChange={(newValue) => {
					setIsVeganFree(newValue);
				}}
				title="Vegan - Free"
			/>
			<FilterSwitch
				value={isVegeterian}
				onChange={(newValue) => {
					setIsvegetarian(newValue);
				}}
				title="Vegetarian"
			/>
		</View>
	);
};

export default FilterScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 10
	}
});
