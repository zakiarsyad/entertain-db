import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default ButtonBack = (props) => {
    const handleBack = () => {
        props.navigation.navigate('Movie')
    }

    return (
        <TouchableOpacity
            onPress={handleBack}
            style={styles.button}>
            <Text style={styles.label}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20, width: '100%', alignItems: 'flex-start'
    },
    label: {
        borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1 
    }
});