import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default MovieItem = (props) => {
    const linkToDetail = () => {
        props.navigation.navigate('Detail')
    }

    return (
        <TouchableOpacity
            onPress={linkToDetail}
            style={styles.container}>
            <View style={styles.image}>
                <Text>FOTO</Text>
            </View>
            <View style={styles.details}>
                <Text>title</Text>
                <Text>popularity</Text>
                <Text>status</Text>
                <Text>release date</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', marginTop: 15
    },
    image: {
        width: '30%', height: 120, borderRadius: 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'
    },
    details: {
        width: '70%', paddingHorizontal: 15, paddingVertical: 15
    }
});