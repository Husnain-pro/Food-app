import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomeHeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
					<Item title="Favorite" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
				</HeaderButtons>
			)
		});
	}, [navigation]);
	const itemData = (itemData) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })}>
				<View style={styles.gridItem}>
					<View style={styles.container}>
						<Text>{itemData.item.title}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.screen}>
			<FlatList numColumns={2} data={CATEGORIES} renderItem={itemData} />
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	gridItem: {
		margin: 15,
		height: 150,
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
	container: {
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 3,
		padding: 45,
		overflow: 'hidden',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	}
});
