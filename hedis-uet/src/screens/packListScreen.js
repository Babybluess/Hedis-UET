import { RefreshControl, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable, Alert, Modal } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Back from '../ultis/backButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import subject from '../constants/subject';
import { useDispatch, useSelector } from 'react-redux';
import { updatedAddPack } from '../context/actions/user'
import { XCircleIcon } from 'react-native-heroicons/solid';

const PackListScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [list, setList] = useState([subject[6], subject[7], subject[8], subject[9]])
  const packData = useSelector((state) => state.packList)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false);

  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  

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
          <Text style={styles.tittle}>Thêm gói</Text>
        </View>
        <View style={styles.mainContext}>
        { list.filter(x => !packData.packList.includes(x)).map((item, index) => (
              <>
                {
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
                              {
                                item.id < 9 
                                ? 
                                <TouchableOpacity style={styles.button_btn}  onPress={() => dispatch(updatedAddPack(item))}>
                                  <Text style={{ color: 'white'}}>Thêm</Text>
                                </TouchableOpacity>
                                : 
                                <>
                                    <Modal
                                      animationType="slide"
                                      transparent={true}
                                      visible={modalVisible}
                                      onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                        setModalVisible(!modalVisible);
                                      }}>
                                      <View style={styles.containerModal}>
                                        <View style={styles.modalView}>
                                          <Text style={styles.text}>Scan QR code to pay</Text>
                                          <Image source={require('../../assets/image/QR.jpg')} style={{width: wp(80), height: hp(40), borderRadius: 15}}/>
                                          <Pressable
                                            style={{width: wp(5), height: hp(5)}}
                                            onPress={() => setModalVisible(!modalVisible)}>
                                            <XCircleIcon style={{color: 'black'}}/>
                                          </Pressable>
                                        </View>
                                      </View>
                                    </Modal>
                                    <TouchableOpacity style={styles.button_btn} onPress={() => setModalVisible(true)}>
                                      <Text style={{ color: 'white'}}>Premium</Text>
                                    </TouchableOpacity>
                                </>
                              }       
                      </Animated.View>
                }
              </>
            ))} 
        </View>
    </ScrollView>
  </View>  
  )
}



export default PackListScreen

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
    paddingVertical: 25,
  },
  tittle: {
      fontSize: 32,
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
  },
  modalView: {
    width: wp(90),
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  containerModal: {
    width: wp(95),
    height: hp(65),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#778899',
    borderRadius: 20,
    marginHorizontal: wp(2.5),
    marginVertical: hp(21)
  }
})