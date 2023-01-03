import React from 'react';
import {Button, Text, View,ImageBackground,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from "../styling"



function Home({navigation}) {

  let moveScreen = (route)=>{
    navigation.navigate(route)
}


  return (
    <ImageBackground
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
    }}>
    <View style={[styles.h100, styles.flexCenter,]}>
    <Text style={{color: "white", fontSize: 30}}>Home</Text>
    
    <View style={styles.p2}>
    
    <TouchableOpacity onPress={()=>moveScreen('LiveLocation')} style={[styles.btn,styles.flexRow,styles.flexCenter,styles.my2]}>
          <Text style={[styles.textWhite,styles.fs4]}>LIVE LOCATION</Text>
          <Icon name="location-on" size={30} color={styles._white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>moveScreen('Product')} style={[styles.btn,styles.flexRow,styles.flexCenter,styles.my2]}>
          <Text style={[styles.textWhite,styles.fs4]}>PIZZA ITEMS</Text>
          <Icon name="local-pizza" size={30} color={styles._white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>moveScreen('OrderScreen')} style={[styles.btn,styles.flexRow,styles.flexCenter,styles.my2]}>
          <Text style={[styles.textWhite,styles.fs4]}>ORDERS</Text>
          <Icon name="description" size={30} color={styles._white} />
        </TouchableOpacity>
    </View>
    </View>

    </ImageBackground>
  );
}

export default Home;

