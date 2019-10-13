import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
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
            title
        }
    }
`

const UPDATE_MOVIE = gql`
    mutation updateMovie ($_id: String, $tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: Float, $status: String, $backdrop_path: String, $vote_average: Float, $release_date: String) {
        updateMovie (_id: $_id, tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status, backdrop_path: $backdrop_path, vote_average: $vote_average, release_date: $release_date) {
            title
        }
    }
`

export default FormMovie = (props) => {
    const movie = props.navigation.getParam('movie')
    const [createMovie, { newdata }] = useMutation(CREATE_MOVIE)
    const [updateMovie, { updateddata }] = useMutation(UPDATE_MOVIE)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [overview, setOverview] = useState('')
    const [poster_path, setPoster_path] = useState('')
    const [popularity, setPopularity] = useState('')
    const [status, setStatus] = useState('')
    const [backdrop_path, setBackdrop_path] = useState('')
    const [vote_average, setVote_average] = useState('')
    const [release_date, setRelease_date] = useState('')

    useEffect(() => {
        console.log('useeffect');
        if (movie) {
            setTitle(movie.title)
            setTags(movie.tags)
            setOverview(movie.overview)
            setPoster_path(movie.poster_path)
            setPopularity(movie.popularity)
            setStatus(movie.status)
            setBackdrop_path(movie.backdrop_path)
            setVote_average(movie.vote_average)
            setRelease_date(movie.release_date)
        }
    }, [])

    const handleCreate = async  () => {
        alert('save')
        console.log({
            title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status, backdrop_path: backdrop_path, vote_average: vote_average, release_date: release_date, tags: tags
        });
        await createMovie({ variables: { title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status, backdrop_path: backdrop_path, vote_average: vote_average, release_date: release_date, tags: tags } })
        props.navigation.navigate('Movie')
    }

    const handleEdit = async () => {
        alert('edit')
        await updateMovie({ variables: { _id: movie._id, title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status, backdrop_path: backdrop_path, vote_average: vote_average, release_date: release_date, tags: tags } })
        props.navigation.navigate('Movie')
    } 

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
            <ButtonBack navigation={props.navigation} />

            {movie &&
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 25, fontSize: 20 }}>Edit a Movie</Text>
                </View>
            }
            {!movie &&
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 25, fontSize: 20 }}>Add a New Movie</Text>
                </View>
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

                <Text>Release date : </Text>
                    <TextInput
                        value={release_date}
                        onChangeText={setRelease_date}
                        placeholder="yyyy-mm-dd"
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Status : </Text>
                    <TextInput
                        value={status}
                        onChangeText={setStatus}
                        placeholder="all ages / adult"
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Popularity : </Text>
                    <TextInput
                        value={`${popularity}`}
                        onChangeText={setPopularity}
                        placeholder="123.45"
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Vote average : </Text>
                    <TextInput
                        value={`${vote_average}`}
                        onChangeText={setVote_average}
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Poster Path : </Text>
                    <TextInput
                        value={poster_path}
                        onChangeText={setPoster_path}
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                <Text>Backdrop Path : </Text>
                    <TextInput
                        value={backdrop_path}
                        onChangeText={setBackdrop_path}
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} />

                {/* <Text>Tags: </Text>
                    <TextInput
                        value={tags}
                        onChangeText={setTags}
                        style={{ borderWidth: 1, width: '100%', borderRadius: 20, marginBottom: 15, paddingHorizontal: 15 }} /> */}

                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    {movie && 
                        <ButtonEdit handleEdit={handleEdit} />
                    }
                    {!movie && 
                        <ButtonSubmit handleCreate={handleCreate} />
                    }
                </View>
            </View>
            </ScrollView>
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