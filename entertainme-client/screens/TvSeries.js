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

import ButtonHome from '../components/TvSeries/button-home'
import Search from '../components/TvSeries/search'
import Navbar from '../components/TvSeries/navbar'
import TvThumbnail from '../components/TvSeries/movie-thumbnail'
import TvItem from '../components/TvSeries/movie-item'
import ButtonAdd from '../components/TvSeries/button-add'

const TV = gql`
    {
        tvseries {
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

const TV_SUB = gql`
  subscription tvseriesUpdated{
    tvseriesUpdated {
        _id
    }
  }
`

export default Tv = (props) => {
    const { loading, error, data } = useQuery(TV)
    const { data: dataSub } = useSubscription(TV_SUB)
    const [loadTv, { called, loading: loadingLazy, data: dataLazy }] = useLazyQuery(TV)

    const [query, setQuery] = useState('')

    let tvseries = []

    if (data) tvseries = data.tvseries

    if (dataLazy) {
        tvseries = dataLazy
            ? dataLazy.tvseries.filter(el => el.title.toLowerCase().includes(query.toLowerCase()))
            : []
    }

    useEffect(() => {
        loadTv()
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

    const thumbnail = [...tvseries]
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
    tvseries.sort(compare)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backbutton}>
                    <ButtonHome
                        linkToHome={linkToHome}
                        label={'Home'} />
                </View>
                <Search handleInput={handleInput} query={query} />
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
                                thumbnail.map((tv, i) => (
                                    <TvThumbnail
                                        key={i}
                                        tv={tv}
                                        navigation={props.navigation} />
                                ))
                            }
                            <View style={{ width: 10 }}></View>
                        </ScrollView>
                    </View>

                    <View style={styles.allmovies}>
                        <Text style={{ marginTop: 25, fontWeight: 'bold', fontSize: 18 }}>All Movies</Text>
                        {tvseries.length > 0 &&
                            tvseries.map((tv, i) => (
                                <TvItem
                                    key={i}
                                    tv={tv}
                                    navigation={props.navigation} />
                            ))
                        }
                        <View style={{ height: 20 }}></View>
                    </View>
                </ScrollView>
            </View>
            <ButtonAdd navigation={props.navigation} />
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