import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { StackActions, CommonActions } from '@react-navigation/native';
import subject from '../constants/subject';

export default function CustomButton({index, navigation, searchContext}) {
  const[preList, setPrelist] = useState({bgColor: "FFFFFF"})
  const[nextList, setNextlist] = useState({bgColor: "FFFFFF"})

    useEffect(() => {
      if(index > 1) {
        setPrelist(subject[index - 2])
      }
      if(index < 6) {
        setNextlist(subject[index])
      }
    }, [index])

  return (
    <View style={styles.routerBtn}>
    {
      preList.bgColor && nextList.bgColor && (
      <>
        {
          index > 1 && (
            <TouchableOpacity  onPress={() =>
                navigation.navigate('DetailItem', {...preList})}
              style={{width: 160, height: 40, borderRadius: 20, flexDirection: 'row', gap: 5, backgroundColor:`#${preList.bgColor}`, justifyContent: 'center', alignItems: 'center' }}>
                <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
                <Image style={{objectFit: 'contain',  width: 35, height: 50}} source={preList.image}/>
                <Text style={styles.text}>{preList.name}</Text>
            </TouchableOpacity>
          )
        }
        {
          index < 6 && (
            <TouchableOpacity  onPress={() =>
                  navigation.navigate('DetailItem', {...nextList})}
                style={{width: 160, height: 40, borderRadius: 20, flexDirection: 'row', gap: 5, backgroundColor:`#${nextList.bgColor}`, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.text}>{nextList.name}</Text>
                  <Image style={{objectFit: 'contain', width: 35, height: 50}} source={nextList.image}/>
                  <ChevronRightIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
              </TouchableOpacity>
          )
        }
      </>
      )
    }
  </View>
  )
}

const styles = StyleSheet.create({
  routerBtn: {
    flexDirection: 'row',
    gap: 10,
    width: hp(85),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'light'
  }
})