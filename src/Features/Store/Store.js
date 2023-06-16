import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../Reducers/cartReducer';
import productReducer from '../Reducers/productReducer';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
