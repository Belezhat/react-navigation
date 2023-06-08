import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ShopScreen = () => {
  return (
    <View style= {styles.container}>
      <Text>ShopScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ShopScreen;