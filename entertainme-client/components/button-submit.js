import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default ButtonSubmit = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.label}>CREATE</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    label: {
        borderWidth: 1, borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5 
    }
});