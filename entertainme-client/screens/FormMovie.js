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

import ButtonBack from '../components/button-back'
import ButtonSubmit from '../components/button-submit'
import ButtonEdit from '../components/button-edit'

const CREATE_MOVIE = gql`
    mutation createMovie ($tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: Float, $status: String, $backdrop_path: String, $vote_average: Float, $release_date: String) {
        createMovie (tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status, backdrop_path: $backdrop_path, vote_average: $vote_average, release_date: $release_date) {
            _id
        }
    }
`

const UPDATE_MOVIE = gql`
    mutation updateMovie ($_id: String, $tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: Float, $status: String, $backdrop_path: String, $vote_average: Float, $release_date: String) {
        updateMovie (_id: $_id, tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status, backdrop_path: $backdrop_path, vote_average: $vote_average, release_date: $release_date) {
            _id
        }
    }
`

export default FormMovie = (props) => {
    const movie = props.navigation.getParam('movie')
    const [createMovie, { newdata }] = useMutation(CREATE_MOVIE)
    const [updateMovie, { updateddata }] = useMutation(UPDATE_MOVIE)
    const [title, setTitle] = useState('')

    useEffect(() => {
        if(movie) setTitle(movie.title)
    }, [])

    const handleCreate = async  () => {
        alert('save')
        await createMovie({ variables: { title: title } })
        props.navigation.navigate('Movie')
    }

    const handleEdit = async () => {
        alert('edit')
        await updateMovie({ variables: { _id: movie._id, title: title } })
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
                <TextInput multiline numberOfLines={4} style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15, justifyContent: 'flex-start', alignItems: 'flex-start' }} />
                <Text>Poster : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <Text>Popularity : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
                <Text>Status : </Text>
                <TextInput style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />
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