import { useState } from 'react';
import { Button, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import styles from "../styling"
import SMTextField from '../component/SMTextInput'
import SMButton from '../component/SMButton'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


function SignUp({ navigation }) {
    const [model, setModel] = useState({});

    let signupuser = () => {
      console.log(model);
      auth()
        .createUserWithEmailAndPassword(model.email, model.password)
        .then(res => {
          console.log(res);
          console.log(res.user.uid);
          database()
            .ref(`users/${res.user.uid}`)
            .set(model)
            .then(() => {
              navigation.navigate('Login', res.user.uid);
            })
            .catch(dbError => {
              console.log(dbError);
            });
        })
        .catch(err => {
          console.log(err);
        });
    };


    return (
        <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
        }}>
        <View style={[styles.h100, styles.flexCenter,]}>
             <Text style={{color: "white", fontSize: 30}}>Signup</Text>
             <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, firstName: e})}
            label="Enter Your First Name"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, lastName: e})}
            label="Enter Your Last Name"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, email: e})}
            label="Enter Your Email"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, password: e})}
            label="Enter Your Password"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton onPress={signupuser} label="SignUp" />
        </View>

        <View style={[styles.p2, styles.w100]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3, styles.textPrimary]}>
                Already have an account?
              </Text>
            </TouchableOpacity>
      
        </View>
        </View>
        </ImageBackground>
    )
}

export default SignUp;


