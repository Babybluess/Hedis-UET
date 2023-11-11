import { RefreshControl, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Back from '../ultis/backButton';
import { CheckBadgeIcon } from 'react-native-heroicons/solid';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PlusCircleIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import subject from '../constants/subject';

export default function PackListScreen() {

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [addList, setAddList] = useState([7, 8])
  const [buyList, setBuyList] = useState([9, 10])
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
            paddingBottom: 30,
        }}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header_btn}>
          <Back/>
          <Text style={styles.tittle}>Additional Packages</Text>
        </View>
        <View style={styles.mainContext}>
        { subject.map((item, index) => (
              <>
                {
                  item.id > 6 &&
                    <Animated.View key={index} style={{flexDirection: 'row', width: wp(95), justifyContent: 'space-between', alignItems:'center'}} entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
                        <View key={index} style={{width: 210, height: 95, gap: 20, alignItems: 'center', marginBottom: 5, borderRadius: 10, flexDirection: 'row', paddingHorizontal: 10 }}>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})} style={{backgroundColor:`#${item.bgColor}`, width: wp(30), height: hp(15), borderRadius: 10, justifyContent:'center', alignItems: 'center'}}>
                            <Image source={item.image} style={{width: wp(22) + 5, height: hp(10)+ 4}}/>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => navigation.navigate('DetailItem', {...item})}>
                            <Text style={styles.text}>{item.name}</Text>
                            <Text></Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button_btn}>
                            <Text style={{ color: 'white'}}>{`${item.id < 9 ? 'Thêm' : 'Premium'}`}</Text>
                        </TouchableOpacity>
                      </Animated.View>
                }
              </>
            ))}  
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
    backgroundColor: 'white',
  },
  header_btn: {
    height: hp(25),
    width: wp(100),
    backgroundColor: '#9FCB42',
    alignItems: 'start',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingVertical: 20,
  },
  tittle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
  },
  mainContext: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    borderRadius: 20,
    backgroundColor: 'white',
    gap: 20,
    marginTop: -15,
    paddingVertical: 30
  },
  button_btn: {
    backgroundColor: '#9FCB42',
    width: wp(20),
    height: hp(4),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
   text: {
    fontSize: 22,
    fontWeight: '500'
  }
})