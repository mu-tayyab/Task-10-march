import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// constants
import screenRouteName from '../constants/RouteName';
import AllProductsScreen from '../screens/HomeStack/Stack/AllProductsScreen';
import AddToCartScreen from '../screens/HomeStack/Stack/AddToCartScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={screenRouteName.ALL_PRODUCTS}>
      <Stack.Screen
        name={screenRouteName.ALL_PRODUCTS}
        component={AllProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenRouteName.ADD_TO_CART}
        component={AddToCartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
