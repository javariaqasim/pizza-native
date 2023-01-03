import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../styling';
import logo from '../assets/logo.jpg';

function Splash({navigation}) {
  return (
    <>
      <ImageBackground
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5uCOhnxfz3mC9N17O405mfaR3m4jopP-xXg&usqp=CAU',
      }}>
      <View style={[ styles.h100, styles.flexCenter]}>
        <View>
          <Image
            source={logo}
            resizeMode="contain"
            style={{width: 300, height: 120, borderRadius: 50}}
          />
        </View>
        <View style={[styles.p2, styles.w100, styles.flexCenter]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Sign Up');
            }}
            style={styles.btn}>
            <Text style={[styles.textPrimary, styles.fs3]}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </>
  );
}
export default Splash;
