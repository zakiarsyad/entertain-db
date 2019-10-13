import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default ButtonEdit = (props) => {
    return (
        <TouchableOpacity onPress={props.handleEdit}>
            <Text style={styles.label}>EDIT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    label: {
        borderWidth: 1, borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5
    }
});