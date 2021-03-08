import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Login from './src/views/Login';

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}
