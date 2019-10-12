import React, { useState } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import Constants from 'expo-constants'

import ButtonHome from '../components/button-home'
import Search from '../components/search'
import Navbar from '../components/navbar'
import MovieThumbnail from '../components/movie-thumbnail'
import MovieItem from '../components/movie-item'
import ButtonAdd from '../components/button-add'

export default Movie = (props) => {
    const linkToHome = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.15, backgroundColor: '#f8f8f8', width: '100%', paddingBottom: 15 }}>
                <View style={{ marginVertical: 10, paddingLeft: 15 }}>
                    <ButtonHome
                        linkToHome={linkToHome}
                        label={'Home'}/>
                </View>
                <Search />
            </View>
            <View style={{ flex: 0.85, backgroundColor: 'green'}}>
                <ScrollView>
                    <View style={{ backgroundColor: '#f8f8f8', width: '100%' }}>
                        <Navbar />

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginVertical: 20 }}>
                            <View style={{ width: 10 }}></View>
                            <MovieThumbnail navigation={props.navigation}/>
                            <MovieThumbnail navigation={props.navigation}/>
                            <MovieThumbnail navigation={props.navigation}/>
                            <MovieThumbnail navigation={props.navigation}/>
                            <MovieThumbnail navigation={props.navigation}/>
                            <View style={{ width: 10 }}></View>
                        </ScrollView>
                    </View>

                    <View style={{ width: '100%', paddingHorizontal: 15, backgroundColor: '#fff' }}>
                        <Text style={{ marginTop: 25 }}>All Movies</Text>
                        <MovieItem navigation={props.navigation}/>
                        <MovieItem navigation={props.navigation}/>
                        <MovieItem navigation={props.navigation}/>
                        <View style={{ height: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
            <ButtonAdd navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight
    }
});