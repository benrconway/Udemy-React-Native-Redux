import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <Header headerText="TechStack App" />
        <LibraryList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
