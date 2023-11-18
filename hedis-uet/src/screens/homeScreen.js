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
    ImageBackground,
    Pressable, } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import * as Icons from "react-native-heroicons/solid";
  import subject from '../constants/subject';
  import { useNavigation } from "@react-navigation/native";
  import Categories from '../components/categories'
  import Back from '../ultis/backButton';
  import AddPackage from '../components/addPackage';
  import BookOpenIcon from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';


export default function HomeScreen() {

 const [search, setSearch]= useState('')
 const packScreen = useSelector((state) => state.screenList)
 const list = [1,2,3,4,5,6]
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 20}} >
          <View style={styles.header}>
            <Text style={styles.title}>Xin chào bạn</Text>
            <View style={styles.bgAccount}>
              <Image source={require('../../assets/image/defaultAccount.png')}/>
            </View>
          </View>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => updatedFavor()}>
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
              {   packScreen.screenList.map((items, id) => (
                    <Categories key={id} item={items} index={id} navigation={navigation}/>
                  )
              )}
              <AddPackage list={list} navigation={navigation}/>
          </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Flash Card')} style={styles.box}>
        <Icons.BookOpenIcon color='black' size={hp(4.5)} strokeWidth={10} style={{color: 'white'}}/>
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
        backgroundColor: 'white',
      },
      header: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(85),
        marginVertical: 20
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        width: 200,
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
        justifyContent: 'space-between',
         marginBottom: 40
      },
      text: {
        fontSize: 24,
        fontWeight: 'light',
      },
      box: {
        position: 'absolute',
        bottom: 20,
        right: 30,
        backgroundColor: 'steelblue',
        borderRadius: 50,
        width: wp(14),
        height: hp(7),
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }
})

