import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List Screen</Text>
      {/* Add your product list screen content here */}
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

export default ProductListScreen;
