import React from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import Constants from 'expo-constants'
import { gql } from "apollo-boost"
import { useQuery, useSubscription } from '@apollo/react-hooks'

import ButtonHome from '../components/button-home'
import Search from '../components/search'
import Navbar from '../components/navbar'
import MovieThumbnail from '../components/movie-thumbnail'
import MovieItem from '../components/movie-item'
import ButtonAdd from '../components/button-add'

const MOVIES = gql`
    {
        movies {
            tags
            _id
            title
            overview
            poster_path
            popularity
            status
            createdAt
        }
    }
`


export default Movie = (props) => {
    const { loading, error, data } = useQuery(MOVIES)

    // const { loading, error, data } = useSubscription(gql`
    //     subscription {
    //         moviesx
    //     }
    // `)

    if (loading) return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
    if (error) return <Text>Error :(</Text>

    const linkToHome = () => {
        props.navigation.navigate('Home')
    }

    const thumbnail = [...data.movies]
    function compare(a, b) {
        let comparison = 0;
        if (a.createdAt < b.createdAt) {
            comparison = 1;
        } else if (a.createdAt > b.createdAt) {
            comparison = -1;
        }
        return comparison;
    }
    thumbnail.sort(compare)
    thumbnail.length = 5
    data.movies.sort(compare)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backbutton}>
                    <ButtonHome
                        linkToHome={linkToHome}
                        label={'Home'}/>
                </View>
                <Search />
            </View>
            <View style={{ flex: 0.85 }}>
                <ScrollView>
                    <View style={styles.banner}>
                        <Navbar />

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginVertical: 20 }}>
                            <View style={{ width: 10 }}></View>
                            {thumbnail &&
                                thumbnail.map((movie, i) => (
                                    <MovieThumbnail
                                        key={i}
                                        movie= {movie}
                                        navigation={props.navigation} />
                                ))
                            }
                            <View style={{ width: 10 }}></View>
                        </ScrollView>
                    </View>

                    <View style={styles.allmovies}>
                        <Text style={{ marginTop: 25, fontWeight: 'bold', fontSize: 18 }}>All Movies</Text>
                        {data &&
                            data.movies.map((movie, i) => (
                                <MovieItem
                                    key={i}
                                    movie={movie}
                                    navigation={props.navigation} />
                            ))
                        }
                        <View style={{ height: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
            <ButtonAdd navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight
    },
    header: {
        flex: 0.15, backgroundColor: '#f8f8f8', width: '100%', paddingBottom: 15
    },
    allmovies: {
        width: '100%', paddingHorizontal: 15, backgroundColor: '#fff'
    },
    backbutton: {
        marginVertical: 10, paddingLeft: 15
    },
    banner: {
        backgroundColor: '#f8f8f8', width: '100%'
    }
});