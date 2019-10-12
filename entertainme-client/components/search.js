import React from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'

export default Search = () => {
    return (
        <TextInput style={styles.input} placeholder="find yours here" />
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 15, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 10
    }
});