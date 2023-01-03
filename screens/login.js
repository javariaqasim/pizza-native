import {Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import styles from '../styling';
import { useState } from 'react';
import SMTextField from '../component/SMTextInput'
import SMButton from '../component/SMButton'
import auth from '@react-native-firebase/auth';

function Login({ navigation }) {
    const [model, setModel] = useState({});

    let loginUser=()=>{
        auth()
        .signInWithEmailAndPassword(model.email, model.password)
        .then(res=>{
          console.log(res.user.uid)
          navigation.navigate('Home')
        })
        .catch(err =>{
          console.log(err)
        })
      }
        
    return (
        <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
        }}>
        <View style={[styles.h100, styles.flexCenter]}>
           <Text style={[styles.textPrimary, styles.fs2]}>Login</Text>
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
          <SMButton onPress={loginUser} label="Login" />
        </View>
        <View style={[styles.p2, styles.w100]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Sign Up');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3, styles.textPrimary]}>
                Create new account?
              </Text>
            </TouchableOpacity>
        </View>
    </View>    

    </ImageBackground>
        
    )
}

export default Login;