import React, { useEffect, useState } from 'react'
import { 
    StyleSheet,
    View,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import Constants from 'expo-constants'
import { gql } from "apollo-boost"
import { useQuery, useLazyQuery, useSubscription } from '@apollo/react-hooks'

import ButtonHome from '../components/Movies/button-home'
import Search from '../components/Movies/search'
import Navbar from '../components/Movies/navbar'
import MovieThumbnail from '../components/Movies/movie-thumbnail'
import MovieItem from '../components/Movies/movie-item'
import ButtonAdd from '../components/Movies/button-add'

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

const MOVIES_SUB = gql`
  subscription movieUpdated{
    movieUpdated {
        _id
    }
  }
`

export default Movie = (props) => {
    const { loading, error, data } = useQuery(MOVIES)
    const { data: dataSub } = useSubscription(MOVIES_SUB)
    const [loadMovie, { called, loading: loadingLazy, data: dataLazy }] = useLazyQuery(MOVIES)

    const [query, setQuery] = useState('')
    
    let movies = []

    if (data) movies = data.movies

    if (dataLazy) {
        movies = dataLazy
            ? dataLazy.movies.filter(el => el.title.toLowerCase().includes(query.toLowerCase()))
            : []
    }

    useEffect(() => {
        loadMovie()
    }, [dataSub])

    if (loading) return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
    if (error) return <Text>Error :(</Text>

    const linkToHome = () => {
        props.navigation.navigate('Home')
    }

    const handleInput = query => {
        setQuery(query)
    }

    const thumbnail = [...movies]
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
    movies.sort(compare)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backbutton}>
                    <ButtonHome
                        linkToHome={linkToHome}
                        label={'Home'}/>
                </View>
                <Search handleInput={handleInput} query={query}/>
            </View>
            <View style={{ flex: 0.85 }}>
                <ScrollView style={{ width : '100%' }}>
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
                        {movies.length > 0 &&
                            movies.map((movie, i) => (
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