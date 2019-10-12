import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'
import Constants from 'expo-constants'

import ButtonBack from '../components/button-back'
import ButtonSubmit from '../components/button-submit'

export default FormMovie = (props) => {
    return (
        <View style={styles.container}>
            <ButtonBack navigation={props.navigation} />
            <Text style={{ marginVertical: 25, fontSize: 20 }}>Add a New Movie</Text>
            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: 15 }}>
                <Text>Title : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <Text>Overview : </Text>
                <TextInput multiline numberOfLines={4} style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'flex-start' }} />
                <Text>Poster : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <Text>Popularity : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <Text>Status : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <ButtonSubmit />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 15
    }
});