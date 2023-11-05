import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SpeakerWaveIcon, XMarkIcon } from 'react-native-heroicons/solid'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function SearchBar({speech}) {
    const[text, setText] = useState([])
    const[sp, setSp] = useState('')
    let n = ''

    useEffect(() => (
        setText( pre => [...pre , ...speech])
        
    ),[speech])

    useEffect(() => {
        // console.log("array to string", text.toString())
        n = n.concat(" ", speech)

    }, [speech])

    useEffect(() => {
        console.log("n", n)
    }, [n])

  return (
    <View style={styles.searchBar}>
        <Text style={styles.textSearch}>{speech}</Text>
        <TouchableOpacity>
            <XMarkIcon size={hp(3.5)} strokeWidth={4.0} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <SpeakerWaveIcon size={hp(3.5)} strokeWidth={4.0} color='black'/>
        </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
        width: wp(85),
        height: hp(8),
        paddingHorizontal: 10,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        gap: 10,
        alignItems:'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginVertical: 10
      },
      textSearch: {
        width: wp(60),
        color: 'white'
      }, 
})