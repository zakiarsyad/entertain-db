import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export default TvThumbnail = (props) => {
    const tv = props.tv

    const linkToDetail = (data) => {
        props.navigation.navigate('DetailTv', { tv: data })
    }

    return (
        <TouchableOpacity
            onPress={() => linkToDetail(tv)}
            style={styles.container}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }}
                source={{ uri: tv.poster_path }}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250, width: 170, borderRadius: 10, shadowColor: 'black', backgroundColor: 'red', marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'
    }
});