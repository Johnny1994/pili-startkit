/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar
} from 'react-native';

import Streaming from './pili-react-native/Streaming'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Pili@ReactNative</Text>
        <Streaming style={{
          width: 100,
          height: 100,
          backgroundColor: 'red'
        }} />
      </SafeAreaView>
    </>
  );
};

export default App;
