import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Path from './src/Navigations/Path';
import store from './src/Features/Store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Path />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
