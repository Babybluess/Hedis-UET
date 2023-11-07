import { Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button, 
  TouchableHighlight, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
widthPercentageToDP as wp,
heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function SignUpScreen() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [signSc, isSignSC] = useState(false)

  const ring1padding = useSharedValue(0);

  const signUp = () => {
    isSignSC(true)
    setTimeout(() => navigation.navigate('Set Name'), 1000)
  }
  useEffect(()=>{
    ring1padding.value = 0;
    setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 300);
},[])
  return (
    <View style={styles.container}>
      <Animated.View style={{padding: ring1padding}}>
        <Image
          style={{width: hp(45), height: hp(45)}}
          source={require('../../assets/image/hedis_uet_logo.png')}
        />
      </Animated.View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={password}
          placeholder="Password"
          keyboardType="visible-password"
        />
         <TextInput
          style={styles.input}
          onChangeText={setPass}
          value={password}
          placeholder="Re-type password"
          keyboardType="visible-password"
        />
      </View>
      <TouchableOpacity style={styles.button_btn}  onPress={() => signUp()}>
        <Text style={styles.textButton}>Sign Up</Text>
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
    backgroundColor: '#BE97E6',
  },
  input: {
    height: 40,
    width: wp(80),
    margin: 6,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40, 
    backgroundColor: 'white',
    color: 'grey'
    
  },
  button_btn: {
    backgroundColor: "#fff",
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(5),
    borderRadius: hp(3.5),
    marginVertical: 5
  },
  textButton: {
    color: "black",
    fontSize: hp(2.2),
    fontWeight: "bold",
  }, 
})