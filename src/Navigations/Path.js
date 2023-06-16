import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import ProductListScreen from '../Screens/ProductListScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const Path = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          headerTitle: 'Product List',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTitle: 'Product Details',
          headerTitleAlign: 'center',
        }}
      /> */}
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: 'Cart',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default Path;

const styles = StyleSheet.create({});
