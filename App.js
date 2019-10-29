import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <Text>TechStack App</Text>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
