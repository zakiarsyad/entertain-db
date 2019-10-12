import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default MovieThumbnail = (props) => {
    const linkToDetail = () => {
        props.navigation.navigate('Detail')
    }

    return (
        <TouchableOpacity
            onPress={linkToDetail}
            style={styles.container}>
            <Text>SINGLE MOVIE</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 250, width: 170, borderRadius: 10, shadowColor: 'black', backgroundColor: 'red', marginHorizontal: 5, justifyContent: 'center', alignItems: 'center'
    }
});