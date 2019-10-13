import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default ButtonAdd = (props) => {
    const linkToForm = () => {
        props.navigation.navigate('FormTv')
    }

    return (
        <TouchableOpacity
            onPress={linkToForm}
            style={styles.button}>
            <Text style={styles.label}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'flex-start', bottom: 20, right: 20, position: 'absolute'
    },
    label: {
        borderWidth: 1, borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5, fontSize: 25, backgroundColor: '#f8f8f8'
    }
});