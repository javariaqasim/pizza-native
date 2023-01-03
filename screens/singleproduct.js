import React from 'react';
import {View, Text, Image, ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function SingleProduct({navigation, route}) {
  console.log(route.params);
  let obj = route.params;
  return (
    <>
        <ImageBackground
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
    }}>
      <View style={[ styles.h100, styles.p2]}>
        <Image source={{uri: obj.image}} style={{height: 300, width: '100%'}} />
        <Text style={[styles.fs2, styles.py1, styles.textPrimary]}>
          {obj.title}
        </Text>
        <ScrollView>
          <Text style={[styles.fs5]}>{obj.description}</Text>
          <Text
            style={[
              styles.bgLight,
              styles.textPrimary,
              styles.p2,
              styles.rounded,
              styles.fs3,
              styles.my2,
            ]}>
            {obj.category}
          </Text>
          <Text
            style={[
              styles.fs3,
              styles.textSecondary,
              styles.flexRow,
              styles.alignItemsCenter,
            ]}>
            <Icon name="star" size={30} color={styles._warning} />
            {obj.rating.rate}({obj.rating.count})
          </Text>
          <Text style={[styles.fs2, styles.textWhite]}>Rs: {obj.price}/-</Text>
        </ScrollView>
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('OrderScreen',obj)
            }} style={styles.btn}>
                <Text style={[styles.textWhite,styles.textCenter,styles.fs5]}>Order Now</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </>
  );
}
export default SingleProduct;
