import { Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
    RefreshControl,
    ImageBackground, } from 'react-native'
import React, { useState, useCallback } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import * as Icons from "react-native-heroicons/solid";
  import { HeartIcon, Square3Stack3DIcon, UsersIcon } from "react-native-heroicons/solid";
  import subject from '../constants/subject';
  import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
  import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
  import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

 const [search, setSearch]= useState('')
 const [isFavourite, setIsFavourite] = useState(false);

 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}} >
        <Animated.View entering={FadeIn.delay(200).duration(1000)} style={{width: 50, height: 30, marginTop: 20}}>
              <TouchableOpacity onPress={()=> navigation.goBack()}>
                  <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
              </TouchableOpacity>
        </Animated.View>
          <View style={styles.header}>
            <Text style={styles.title}>Xin chào bạn</Text>
            <View style={styles.bgAccount}>
              <Image source={require('../../assets/image/defaultAccount.png')}/>
            </View>
          </View>
          <View style={styles.searchBar}>
            <TouchableOpacity>
              <Icons.MagnifyingGlassIcon color='black' size={hp(4.5)} strokeWidth={10}/>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              onChangeText={setSearch}
              value={search}
              placeholder="Nhập cụm từ của bạn"
              keyboardType="default"
            />
          </View>
          <View style={styles.item_btn}>
            { subject.map((item, index) => (
              <TouchableOpacity key={index} style={{width: 160, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor:`#${item.bgColor}`, marginBottom: 10, borderRadius: 10 }}>
                  <Image source={item.image} style={{width: 110, height: 100}}/>
                  <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            ))
            }
            <TouchableOpacity style={{width: 160, height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: 'grey', borderStyle: 'dashed' }}>
                  <Image source={require('../../assets/image/general/plus.png')} style={{width: 110, height: 100}}/>
                  <Text style={styles.text}>Thêm gói</Text>
              </TouchableOpacity>

          </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(85),
        marginVertical: 10
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        width: 200
      },
      bgAccount: {
        flexDirection: 'row',
        width: 65,
        height: 60,
        borderRadius: 110,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0095D3',
        shadowColor: 'black'
      },
      searchBar: {
        height: 40,
        width: wp(85),
        gap: 5,
        borderWidth: 1,
        borderColor:'black',
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        marginBottom: 20
      },
      input: {
        width: wp(60),
        padding: 10,
        backgroundColor: 'white',
        color: 'grey'    
      },
      item_btn: {
        width: wp(85),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      text: {
        fontSize: 24,
        fontWeight: 'light'
      }
})