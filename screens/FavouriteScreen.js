import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomeHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavouriteScreen = ({ navigation }) => {
	const favMeals = useSelector((state) => state.meals.favoriteMeals);
	if (favMeals.length === 0 || !favMeals) {
		return (
			<View style={styles.content}>
				<Text>No favorite meals. Start adding some!</Text>
			</View>
		);
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Favorite" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
				</HeaderButtons>
			)
		});
	}, [navigation]);
	return <MealList listData={favMeals} navigation={navigation} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
