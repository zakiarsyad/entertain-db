import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export default MovieThumbnail = (props) => {
    const movie = props.movie

    const linkToDetail = (data) => {
        props.navigation.navigate('Detail', { movie: data })
    }

    return (
        <TouchableOpacity
            onPress={() => linkToDetail(movie)}
            style={styles.container}>
            <Image
                style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 10 }}
                source={{ uri: movie.poster_path }}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250, width: 170, borderRadius: 10, shadowColor: 'black', backgroundColor: 'red', marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'
    }
});