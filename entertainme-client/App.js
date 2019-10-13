import React from 'react';
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './screens/Home'
import TvSeries from './screens/TvSeries'
import Movie from './screens/Movies'
import Detail from './screens/Detail'
import FormMovie from './screens/FormMovie'
import store from './store/'
// import client from './graphql'

const client = new ApolloClient({
  // uri: 'http://localhost:4000',
  uri: 'http://192.168.0.4:4000',
});

const MovieNavigator = createStackNavigator({
  Movie,
  Detail,
  FormMovie
}, {
    initialRouteName: 'Movie',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  Movies : MovieNavigator,
  TvSeries
}, { initialRouteName: 'Home'}))

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </ApolloProvider>
  );
}
