import React from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'

export default Search = (props) => {
    return (
        <TextInput
            value={props.query}
            onChangeText={props.handleInput}
            style={styles.input} placeholder="find yours here" />
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 15, backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 10
    }
});