import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContext } from '@react-navigation/native'

export default function AddPackage({list, navigation}) {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Add Package', list)} style={{width: 150, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: 'grey', borderStyle: 'dashed' }}>
        <Image source={require('../../assets/image/general/plus.png')} style={{width: 110, height: 100}}/>
        <Text style={styles.text}>Thêm gói</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: '500'
      }
})