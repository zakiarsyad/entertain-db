import React from 'react';
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './screens/Home'
import TvSeries from './screens/TvSeries'
import Movie from './screens/Movies'
import DetailMovie from './screens/Movies/Detail'
import FormMovie from './screens/Movies/FormMovie'
import DetailTv from './screens/TvSeries/Detail'
import FormTv from './screens/TvSeries/FormTv'
import store from './store/'
// import client from './graphql'

const client = new ApolloClient({
  // uri: 'http://localhost:4000',
  uri: 'http://192.168.0.4:4000',
});

const MovieNavigator = createStackNavigator({
  Movie,
  DetailMovie,
  FormMovie
}, {
  initialRouteName: 'Movie',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const TvNavigator = createStackNavigator({
  TvSeries,
  DetailTv,
  FormTv
}, {
  initialRouteName: 'TvSeries',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const RootNavigation = createAppContainer(createSwitchNavigator({
  Home,
  Movies : MovieNavigator,
  TvSeries : TvNavigator
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
