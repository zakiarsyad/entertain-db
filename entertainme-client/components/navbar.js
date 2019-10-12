import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export default Navbar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.label}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.label}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.label}>Showing Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', alignItems: 'flex-start', paddingLeft: 15, flexDirection: 'row'
    },
    label: {
        marginRight: 40, borderBottomColor: 'black', borderBottomWidth: 2
    }
});