import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default StickyButton = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.linkToHome()}
            style={styles.button}>
            <Text style={styles.label}>{props.label}</Text>
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