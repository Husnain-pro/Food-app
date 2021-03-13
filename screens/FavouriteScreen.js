import React, { useLayoutEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
const FavouriteScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Favorite" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
				</HeaderButtons>
			)
		});
	}, [navigation]);
	const mealData = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');
	return <MealList listData={mealData} navigation={navigation} />;
};

export default FavouriteScreen;

// const styles = StyleSheet.create({
// 	screen: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });
