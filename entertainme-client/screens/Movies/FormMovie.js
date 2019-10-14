import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'
import Constants from 'expo-constants'
import { gql } from "apollo-boost"
import { useMutation } from '@apollo/react-hooks'

import ButtonBack from '../../components/Movies/button-back'
import ButtonSubmit from '../../components/Movies/button-submit'
import ButtonEdit from '../../components/Movies/button-edit'

const CREATE_MOVIE = gql`
    mutation createMovie ($tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: String, $status: String) {
        createMovie (tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status) {
            _id
        }
    }
`

const UPDATE_MOVIE = gql`
    mutation updateMovie ($_id: String, $tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: String, $status: String) {
        updateMovie (_id: $_id, tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status) {
            _id
        }
    }
`

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

export default FormMovie = (props) => {
    const movie = props.navigation.getParam('movie')
    const [createMovie, { newdata }] = useMutation(CREATE_MOVIE, { refetchQueries: [{ query: MOVIES }]})
    const [updateMovie, { updateddata }] = useMutation(UPDATE_MOVIE, { refetchQueries: [{ query: MOVIES }] })
    const [title, setTitle] = useState('')
    const [overview, setOverview] = useState('')
    const [poster_path, setPoster_path] = useState('')
    const [popularity, setPopularity] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (movie) {
            setTitle(movie.title)
            setOverview(movie.overview)
            setPoster_path(movie.poster_path)
            setPopularity(movie.popularity)
            setStatus(movie.status)
        }
    }, [])

    const handleCreate = async  () => {
        await createMovie({ variables: { title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status } })
        props.navigation.navigate('Movie')
    }

    const handleEdit = async () => {
        await updateMovie({ variables: { _id: movie._id, title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status } })
        props.navigation.navigate('Movie')
    } 

    return (
        <View style={styles.container}>
            <ButtonBack navigation={props.navigation} />

            {movie &&
                <Text style={{ marginVertical: 25, fontSize: 20 }}>Edit a Movie</Text>
            }
            {!movie &&
                <Text style={{ marginVertical: 25, fontSize: 20 }}>Add a New Movie</Text>
            }

            <View style={{ alignItems: 'flex-start', width: '100%', paddingHorizontal: 15 }}>
                <Text>Title : </Text>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                
                <Text>Overview : </Text>
                <TextInput
                    value={overview}
                    onChangeText={setOverview}
                    multiline numberOfLines={4} style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'flex-start' }} />

                <Text>Poster : </Text>
                <TextInput
                    value={poster_path}
                    onChangeText={setPoster_path}
                    style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Popularity : </Text>
                <TextInput
                    value={popularity}
                    onChangeText={setPopularity}
                    style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Status : </Text>
                <TextInput
                    value={status}
                    onChangeText={setStatus}
                    style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    {movie && 
                        <ButtonEdit handleEdit={handleEdit} />
                    }
                    {!movie && 
                        <ButtonSubmit handleCreate={handleCreate} />
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 15
    }
});