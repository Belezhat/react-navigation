import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View style= {styles.container}>
      <Text>ContactScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ContactScreen;