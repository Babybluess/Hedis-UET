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
  import subject from '../constants/subject';
  import { useNavigation } from "@react-navigation/native";
  import Categories from '../components/categories'
  import Back from '../ultis/backButton';
  import AddButton from '../components/addButton';

export default function HomeScreen() {

 const [search, setSearch]= useState('')
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
              {   subject.map((items, id) => (
                  
                  <>
                    { 
                      id < 6 &&
                      <Categories key={id} item={items} index={id} navigation={navigation}/>
                    }
                  </>

                  )
              )}
              <AddButton list={list} navigation={navigation}/>
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
        justifyContent: 'space-between'
      },
      text: {
        fontSize: 24,
        fontWeight: 'light',
      }
})

