import { StyleSheet, Text,Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Categories({item, index, navigation}) {
  return (
    <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
      <Pressable key={index} onPress={() => navigation.navigate('DetailItem', {...item})} style={{width: 160, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor:`#${item.bgColor}`, marginBottom: 10, borderRadius: 10 }}>
        <Image source={item.image} style={{width: 110, height: 100}}/>
        <Text style={styles.text}>{item.name}</Text>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'light'
  }
})