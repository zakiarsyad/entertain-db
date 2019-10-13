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

import ButtonBack from '../../components/TvSeries/button-back'
import ButtonSubmit from '../../components/TvSeries/button-submit'
import ButtonEdit from '../../components/TvSeries/button-edit'

const CREATE_TV = gql`
    mutation createTvSeries ($tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: String, $status: String) {
        createTvSeries (tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status) {
            _id
        }
    }
`

const UPDATE_TV = gql`
    mutation updateTvSeries ($_id: String, $tags: [String], $title: String, $overview: String, $poster_path: String, $popularity: String, $status: String) {
        updateTvSeries (_id: $_id, tags: $tags, title: $title, overview: $overview, poster_path: $poster_path, popularity: $popularity, status: $status) {
            _id
        }
    }
`

export default FormTv = (props) => {
    const tv = props.navigation.getParam('tv')
    const [createTvSeries, { newdata }] = useMutation(CREATE_TV)
    const [updateTvSeries, { updateddata }] = useMutation(UPDATE_TV)
    const [title, setTitle] = useState('')
    const [overview, setOverview] = useState('')
    const [poster_path, setPoster_path] = useState('')
    const [popularity, setPopularity] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (tv) {
            setTitle(tv.title)
            setOverview(tv.overview)
            setPoster_path(tv.poster_path)
            setPopularity(tv.popularity)
            setStatus(tv.status)
        }
    }, [])

    const handleCreate = async  () => {
        await createTvSeries({ variables: { title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status } })
        props.navigation.navigate('TvSeries')
    }

    const handleEdit = async () => {
        await updateTvSeries({ variables: { _id: tv._id, title: title, overview: overview, poster_path: poster_path, popularity: popularity, status: status } })
        props.navigation.navigate('TvSeries')
    } 

    return (
        <View style={styles.container}>
            <ButtonBack navigation={props.navigation} />

            {tv &&
                <Text style={{ marginVertical: 25, fontSize: 20 }}>Edit a Tv Series</Text>
            }
            {!tv &&
                <Text style={{ marginVertical: 25, fontSize: 20 }}>Add a New Tv Series</Text>
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
                    {tv && 
                        <ButtonEdit handleEdit={handleEdit} />
                    }
                    {!tv && 
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