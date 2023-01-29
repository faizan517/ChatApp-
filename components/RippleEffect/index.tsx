import React from "react";
import {View , StyleSheet, Alert} from 'react-native';
import {Text, TouchableRipple } from "react-native-paper";

const TouchableRippleEffect = () => {

	return(
		<View style={styles.container} >
		<TouchableRipple onPress={() =>
		Alert.alert("Welcome to Geeks for Geeks ")}
						rippleColor='rgba(0, 0, 0, .32)'>
		<Text > Press me</Text>
		</TouchableRipple>
		</View>
	)
}

export default TouchableRippleEffect ;

const styles = StyleSheet.create({
	container :{
		
	paddingTop:"30%",
	paddingLeft:"20%"
	}
})
