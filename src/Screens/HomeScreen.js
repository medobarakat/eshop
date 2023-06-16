import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import Product from '../Components/Product';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
      console.log(response);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const onPressProduct = (product) => {
    console.log(product.title);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>Products:</Text>
      <View style={styles.rowContainer}>
        {products?.map((product, index) => (
          <React.Fragment key={index}>
            <Product product={product} onPress={onPressProduct} />
            {(index + 1) % 2 === 0 && <View style={styles.rowSeparator} />}
          </React.Fragment>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = {
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  rowSeparator: {
    width: '100%',
    height: 10,
  },
};

export default HomeScreen;
