import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
    const handlePress = () => {
        navigation.navigate('TabNavigator');
    }
  return (
    <View style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity>
            <Text style={styles.button} onPress={()=>handlePress()}>Go to shop</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
    }
})

export default HomeScreen;