  import React, {useEffect} from 'react';
  import {View, Text, Button} from 'react-native';
  import {useDispatch, useSelector} from 'react-redux';
  import { addToCart, removeFromCart, updateCartItem , clearCart} from '../Features/Actions/cartActions';

  const CartScreen = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = productId => {
      dispatch(removeFromCart(productId));
    };

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    const handleUpdateItem = (product, quantity) => {
      dispatch(updateCartItem({...product, quantity}));
    };

    useEffect(() => {
      handleAddToCart({id:123213,name:"box",price:200,quantity:3});
    }, []);

    return (
      <View>
        {cartItems?.length === 0 ? (
          <Text>Your cart is empty</Text>
        ) : (
          <>
            <Text>Cart Items:</Text>
            {cartItems?.map(item => (
              <View key={item.id}>
                <Text>{item.name}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Button
                  title="Remove"
                  onPress={() => handleRemoveItem(item.id)}
                />
                <Button
                  title="Increase Quantity"
                  onPress={() => handleUpdateItem(item, item.quantity + 1)}
                />
                <Button
                  title="Decrease Quantity"
                  onPress={() => handleUpdateItem(item, item.quantity - 1)}
                />
              </View>
            ))}
          </>
        )}
      </View>
    );
  };

  export default CartScreen;
