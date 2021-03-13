import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MealItem = ({ item, onSelectMeals }) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onSelectMeals}>
				<View>
					<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
						<ImageBackground source={{ uri: item.imageUrl }} style={styles.bgImage}>
							<View style={styles.titleContainer}>
								<Text style={styles.title} numberOfLines={1}>
									{item.title}
								</Text>
							</View>
						</ImageBackground>
					</View>
					<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
						<Text>{item.duration}m</Text>
						<Text>{item.complexity}</Text>
						<Text>{item.affordability}</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	mealItem: {
		flex: 1,
		height: 200,
		width: '100%',
		backgroundColor: '#f5f5f5',
		marginVertical: 10,
		borderRadius: 10,
		overflow: 'hidden'
	},
	mealRow: {
		flexDirection: 'row'
	},
	mealHeader: {
		height: '90%'
	},
	mealDetail: {
		height: '10%',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingVertical: 5,
		paddingHorizontal: 12
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
		textAlign: 'center'
	}
});
