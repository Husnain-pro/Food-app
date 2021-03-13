import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
	const renderMealItem = (itemData) => {
		return (
			<MealItem
				item={itemData.item}
				onSelectMeals={() => navigation.navigate('MealDetail', { categoryId: itemData.item.id })}
			/>
		);
	};
	return (
		<View style={styles.screen}>
			<FlatList data={listData} renderItem={renderMealItem} style={{ width: '95%' }} />
		</View>
	);
};

export default MealList;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
