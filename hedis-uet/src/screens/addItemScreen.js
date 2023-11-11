import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, ChevronRightIcon, SpeakerWaveIcon } from 'react-native-heroicons/solid';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function AddItemScreen(props) {

  const [nameItem, setNameItem] = useState('');
  const item = props.route.params;
  const navigation = useNavigation()

  const getImage = async() => {
    const result = await launchCamera(mediaType);
  }

  return (
 <View style={styles.container}>
    <Animated.View entering={FadeIn.delay(200).duration(1000)} style={{width: wp(100), paddingLeft: 10, paddingTop: 20, backgroundColor: `#${item.bgColor}`}}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
              <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="black" />
          </TouchableOpacity>
    </Animated.View>
    <View style={{ justifyContent: 'flex-end',  width: wp(100), height: hp(15), backgroundColor: `#${item.bgColor}`, padding: 20}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>Tạo bộ sưu tập</Text>
    </View>
    <View style={styles.mainContext}>
        <View style={{marginVertical: 10}}>
            <TouchableOpacity onPress={() => getImage()} style={{width: wp(85), height: hp(25), justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F4F4', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 1, borderColor: 'grey', borderStyle: 'dashed', flexDirection: 'row'}}>
              <Image source={require('../../assets/image/general/plus.png')} style={{width: 20, height: 20}}/>
              <Image source={require('../../assets/image/favourites/photo_placeholder.png')}/>
            </TouchableOpacity>
            <View style={{width: wp(85), height: hp(25), justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8E8E8', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: 'grey', borderStyle: 'dashed', gap: 5, borderTopWidth: 0}}>
              <Text style={{color: 'black', fontSize: 18, width: wp(80)}}>Ghi chú:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => setNameItem(value)}
                value={nameItem}
                placeholder="Hãy điền tên của Icon này"
                keyboardType="numeric"
              />
            </View>
        </View>
        <View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
            <Text style={{ color: 'white'}}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  mainContext: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    borderRadius: 20,
    backgroundColor: 'white',
    gap: 15,
    marginTop: -15,
    paddingVertical: 20
  },   
  item_btn: {
    width: wp(85),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#5D7E86",
    width: 50,
    height: 30,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: wp(80),
    height: hp(18),
    backgroundColor: 'white'
  }
})