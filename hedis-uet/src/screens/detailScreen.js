import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, RefreshControl, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, ChevronRightIcon, SpeakerWaveIcon } from 'react-native-heroicons/solid';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Loading from '../components/loading';
import CustomButton from '../components/customButton';
import SearchBar from '../components/searchBar';


export default function DetailScreen(props) {
  const item = props.route.params;
  const navigation = useNavigation()
  const[data, setdata] = useState([])
  const[isLoading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false);
  const [message, setMessage] = useState('')

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(() => {
    console.log('data', data);
  }, [data.length]);
  
  const getPackageData = async(name) => {
    const url = `https://ivory-necessary-cougar-154.mypinata.cloud/ipfs/Qmbrh647KPWiHGyxVumVfT13BChDgXMMupKmJTDMDR5dDE/${name}.json`;
    
    const response = await fetch(url);
    const text = await response.json();
    
    setdata(text.itemPackage)
    setLoading(false)    
  };


  useEffect(() => {
    getPackageData(item.idName)
  }, [item])
  
  useEffect(() => {
    console.log('message', message)
  },[message])

  return (
    <ScrollView style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          paddingBottom: 30,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } 
    >
      <Animated.View entering={FadeIn.delay(200).duration(1000)} style={{width: wp(100), paddingLeft: 10, paddingTop: 20, backgroundColor: `#${item.bgColor}`}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="black" />
            </TouchableOpacity>
      </Animated.View>
      <View style={{ justifyContent: 'flex-end',  width: wp(100), height: hp(15), backgroundColor: `#${item.bgColor}`, padding: 10}}>
          <View style={{ flexDirection: 'row', gap: 10, padding: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 32, fontWeight: 'bold'}}>{item.name}</Text>
            <SpeakerWaveIcon size={hp(3.5)} strokeWidth={4.0} color='black'/>
          </View>
      </View>
    {isLoading ? (
        <Loading style={styles.loading}/>
      ) : (
      <View style={styles.mainContext}>
          <View style={styles.item_btn}>
            <SearchBar message={message} navigation={navigation}/>
            {
              data.map((item, index) => (
                <Animated.View key={index} entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                  <TouchableOpacity onPress={() => setMessage(item.name)} key={index} style={styles.card}>
                    <Image style={{objectFit: 'contain', width: 60, height: 75}} source={{uri : item.image}}/>
                    <Text style={styles.text}>{item.name}</Text>
                  </TouchableOpacity>
                </Animated.View>
              ))
            }
          </View>
          <CustomButton index={item.id} navigation={navigation}/>
       </View>
      )
    }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mainContext: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    borderRadius: 20,
    backgroundColor: 'white',
    gap: 15,
    marginTop: -15
  },   
  text: {
    fontSize: 16,
    fontWeight: 'light'
  },
  item_btn: {
    width: wp(85),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  loading: {
    marginTop: 20,
    fontSize: 50
  }, 
  card: {
    width: 110, 
    height: 120, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'#ffffe0', 
    marginBottom: 10, 
    borderRadius: 10, 
    gap: 5, 
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 3,
  },
  routerBtn: {
    flexDirection: 'row',
    gap: 10,
    width: hp(85),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
