import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details Screen</Text>
      {/* Add your product details screen content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
