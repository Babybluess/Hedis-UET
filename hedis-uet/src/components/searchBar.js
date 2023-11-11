import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SpeakerWaveIcon, XMarkIcon } from 'react-native-heroicons/solid'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSpeechSynthesis } from 'react-speech-kit';
import Tts from 'react-native-tts';
import * as Speech from 'expo-speech'


export default function SearchBar({message}) {
    const [speech, setSpeech] = useState('')

    useEffect(() => {
      setSpeech(speech + message.toLowerCase() + ' ')
      console.log("speech", speech)    
    }, [message])

    const resetSearch = () => {
      setSpeech("")
    }
    
  
  return (
    <View style={styles.searchBar}>
        <Text style={styles.textSearch}>{speech}</Text>
        <TouchableOpacity onPress={() => resetSearch()}>
            <XMarkIcon size={hp(3.5)} strokeWidth={4.0} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Speech.speak(speech)} >
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
        marginVertical: 20
      },
      textSearch: {
        width: wp(60),
        color: 'white',
        fontWeight: '600'
      }, 
})