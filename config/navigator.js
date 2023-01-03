import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splashscreen';
import SignUp from '../screens/signup';
import Login from '../screens/login';
import Home from '../screens/home';
import Country from '../screens/country';
import LiveLocation from '../screens/livelocation';
import GoogleMap from '../screens/googlemap';
import Products from '../screens/product';
import Order from '../screens/order';
import SingleProduct from '../screens/singleproduct';



const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={SignUp} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GoogleMap" component={GoogleMap} />
                <Stack.Screen name="Country" component={Country} />
                <Stack.Screen name="LiveLocation" component={LiveLocation} />
                <Stack.Screen name="Product" component={Products} />
                <Stack.Screen name="OrderScreen" component={Order} />
                <Stack.Screen name="SingleProduct" component={SingleProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;