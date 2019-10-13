import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export default TvItem = (props) => {
    const tv = props.tv

    const linkToDetail = (data) => {
        props.navigation.navigate('DetailTv', { tv: data })
    }

    return (
        <TouchableOpacity
            onPress={() => linkToDetail(tv)}
            style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }}
                    source={{ uri: tv.poster_path }} />
            </View>
            <View style={styles.details}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{tv.title}</Text>
                <Text>{tv.status}</Text>
                <Text>{tv.popularity}</Text>
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