// import React from 'react';
// import {Text, View, Image,ImageBackground,ScrollView} from 'react-native';
// import styles from '../styling';
import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView,ImageBackground} from 'react-native';
import SMButton from '../component/SMButton';
import database from '@react-native-firebase/database';
import styles from '../styling';
import SMTextField from '../component/SMTextInput';

function Order({navigation, route}) {
  // let ordersArr = [route.params];
  let [model, setModel] = useState({});

  let register =()=>{
    console.log(model)
    model.id = database().ref('order/').push().key;
    database()
    .ref(`order/${model.id}`)
    .set(model)
    .then(()=>{
      console.log('success')
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <>
            <ImageBackground
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
    }}>
    
      <View style={[styles.h100]}>
        <View style={styles.p2}>
          <Text style={[styles.fs2, styles.textPrimary, {textAlign: "center"}]}>Your Order:</Text>
        </View>

        <View style={[styles.p2, styles.w100]}>
          <SMTextField
           onChangeText={e => setModel({...model, yourname: e})}
            label="Your Name"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
          keyboardType="Numeric"
           onChangeText={e => setModel({...model, yournumber: e})}
            label="Your Number "
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
           onChangeText={e => setModel({...model, address: e})}
            label="Your Address"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
           onChangeText={e => setModel({...model, email: e})}
            label="Your Email "
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
          keyboardType="Numeric"
           onChangeText={e => setModel({...model, quantity: e})}
            label="Quantity"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
           onChangeText={e => setModel({...model, flavour: e})}
            label="Flavour"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton
           onPress={register} label="Confirm"
          />
        </View>
  
        {/* <View>
          {ordersArr.map((x, i) => (
            <View
              style={[
                styles.m1,
                styles.bgWhite,
                styles.rounded,
                styles.shadow1,
                styles.p1,
              ]}
              key={i}>
              <View style={[styles.flexRow,styles.w100,styles.justifyContentBetween]}>
                <View style={styles.w20}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={{uri: x.image}}
                  />
                </View>
                <View style={styles.w50}>
                  <Text style={styles.fs5} noOfLines={1}>
                    {x.title}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.fs5, styles.textDanger]}>
                    Rs:{x.price}/-
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View> */}
      </View>

      </ImageBackground>
    </>
  );
}
export default Order;
