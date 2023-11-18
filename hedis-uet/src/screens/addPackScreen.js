import { RefreshControl, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Back from '../ultis/backButton';
import { CheckBadgeIcon } from 'react-native-heroicons/solid';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PlusCircleIcon, MinusCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import subject from '../constants/subject';
import { useDispatch, useSelector } from 'react-redux';
import { updatedScreen, deletePackScreen, updatedAddPack, deletePack } from '../context/actions/user';

export default function AddPackScreen(props) {
    const items = props.route.params;
    const [refreshing, setRefreshing] = useState(false);
    const packData = useSelector((state) => state.packList)
    const packScreen = useSelector((state) => state.screenList)
    const dispatch = useDispatch()


    console.log('screenPack', packScreen)
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

    const addButton = (item) => {
        dispatch(updatedScreen(item))
        dispatch(deletePack(item))
    }

    const deleteButton = (item) => {
      dispatch(deletePackScreen(item))
      dispatch(updatedAddPack(item))
    }

    useEffect(() => {
      console.log('check', items)
    },[])

    useEffect(() => {
      console.log('packData', packData.packList)
      console.log('packScreen', packScreen.screenList)
    },[packData, packScreen])
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            paddingBottom: 30,
        }}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <View style={styles.header_btn}>
        <View style={styles.header_btn1}>
            <Back/>
            <CheckBadgeIcon style={{marginTop: 20}} size={hp(4.5)} strokeWidth={4.5} color="#0095D3" />
        </View>
        <View>
          <View style={styles.bgAccount}>
            <Image source={require('../../assets/image/defaultAccount.png')}/>
          </View>
          <Text style={styles.header}>Name</Text>
        </View>
      </View>
      <View style={styles.mainContext}>
          <TouchableOpacity onPress={() => navigation.navigate('Package List')} style={{width: wp(85), height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F4F4', marginBottom: 10, borderRadius: 10, borderWidth: 1, borderColor: 'grey', borderStyle: 'dashed', flexDirection: 'row', gap: 2, marginVertical: 10 }}>
              <Image source={require('../../assets/image/general/plus.png')} style={{width: 20, height: 20}}/>
              <Text style={styles.tittle}>Thêm gói</Text>
          </TouchableOpacity>
          <View style={{gap: 20}}>
            { packScreen.screenList.map((item, index) => (
                    <Animated.View key={index} style={{flexDirection: 'row', width: wp(90), justifyContent: 'space-between', alignItems:'center'}} entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                        <View key={index} style={{width: 210, height: 95, gap: 20, alignItems: 'center', marginBottom: 5, borderRadius: 10, flexDirection: 'row', paddingHorizontal: 10 }}>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})} style={{backgroundColor:`#${item.bgColor}`, width: wp(30), height: hp(15), borderRadius: 10, justifyContent:'center', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: wp(22) + 5, height: hp(10)+ 4}}/>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text></Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => deleteButton(item)}>
                            <MinusCircleIcon style={{width: 10, height: 10, backgroundColor: 'white', color : '#9FCB42'}}/>
                        </TouchableOpacity>
                    </Animated.View>
            ))
            } 
            {
              
              packData.packList.length >= 1 && packData.packList.map((item, index) => (
                <Animated.View key={index} style={{flexDirection: 'row', width: wp(90), justifyContent: 'space-between', alignItems:'center'}} entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                        <View key={index} style={{width: 210, height: 95, gap: 20, alignItems: 'center', marginBottom: 5, borderRadius: 10, flexDirection: 'row', paddingHorizontal: 10 }}>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})} style={{backgroundColor:`#${item.bgColor}`, width: wp(30), height: hp(15), borderRadius: 10, justifyContent:'center', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: wp(22) + 5, height: hp(10)+ 4}}/>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text></Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => addButton(item)}>
                            <PlusCircleIcon style={{width: 10, height: 10, backgroundColor: 'white', color : '#9FCB42'}}/>
                        </TouchableOpacity>
                      </Animated.View>
              ))
            } 
          </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header_btn: {
        height: hp(30),
        width: wp(100),
        backgroundColor: '#9FCB42',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    header_btn1: {
        width: wp(100),
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
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
    mainContext: {
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: wp(100),
      borderRadius: 20,
      backgroundColor: 'white',
      gap: 15,
      marginTop: -15,
    },
    item_btn: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    tittle: {
      fontSize: 20,
      fontWeight: 'light'
    },
    text: {
      fontSize: 22,
      fontWeight: '500'
    }
})