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
            <View style={styles.area}>
                <TouchableOpacity onPress={linkToMovie}>
                    <Text style={styles.label}>MOVIES</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.area}>
                <TouchableOpacity onPress={linkToTv}>
                    <Text style={styles.label}>TV SERIES</Text>
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
    },
    area: {
        flex: 0.5, width: '100%', alignItems: 'center', justifyContent: 'center'
    },
    label: {
        borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, borderWidth: 1
    }
});