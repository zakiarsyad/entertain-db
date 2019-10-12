import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'

export default Home = (props) => {
    const linkToMovie = () => {
        props.navigation.navigate('Movies')
    }

    const linkToTv = () => {
        props.navigation.navigate('TvSeries')
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5, backgroundColor: 'red', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={linkToMovie}>
                    <Text style={{ backgroundColor: 'blue', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>MOVIES</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5, backgroundColor: 'blue', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={linkToTv}>
                    <Text style={{ backgroundColor: 'red', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>TV SERIEX</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight
    }
});