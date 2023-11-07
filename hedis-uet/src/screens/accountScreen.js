import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { accountImage } from '../constants/subject'
import Animated, { FadeInDown, useSharedValue, withSpring } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function AccountScreen() {

  const navigation = useNavigation();
  const [accImage, setAccImage] = useState('')
  const [isSelected, setSelected] = useState(false)

  const ring1padding = useSharedValue(0);
  useEffect(()=>{
    ring1padding.value = 0;
    setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 300);
},[])

  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Text style={styles.header}>Chọn một hình đại diện!</Text>
          <Text style={styles.paragraph}>Chọn một hình đại diện cho người sẽ sử dụng ứng dụng HEDIS này.</Text>
      </View>
      <View  style={styles.image_btn}>
          {
              accountImage.map((item, id) => (
                <Animated.View key={id} entering={FadeInDown.delay(id*100).duration(600).springify().damping(12)}>  
                  <TouchableOpacity onPress={() => setAccImage(item.image)}  style={styles.image}>
                        <Image
                          style={{width: hp(15), height: hp(15)}}
                          source={item.image}
                        />
                  </TouchableOpacity>
              </Animated.View>  
              ))
          }
      </View>
      <TouchableOpacity style={styles.button_btn}  onPress={() => navigation.navigate('Log In')}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#BE97E6',
  },
  top: {
    width: wp(70)
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 20
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'light',
    textAlign: 'center',
    color: 'white'
  },
  image_btn: {
    flexDirection: 'row',
    width: wp(90),
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10
  },
  button_btn: {
    backgroundColor: "#fff",
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(5),
    borderRadius: hp(3.5),
    marginVertical: 5
  },
  textButton: {
    color: "black",
    fontSize: hp(2.2),
    fontWeight: "bold",
  }, 
  image:{
    width: 110, 
    height: 110, 
  }
})