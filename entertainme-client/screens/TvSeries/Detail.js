import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import Constants from 'expo-constants'
import { gql } from "apollo-boost"
import { useMutation } from '@apollo/react-hooks'

const DELETE_TV = gql`
    mutation deleteTvSeries($_id: String) {
        deleteTvSeries(_id: $_id) {
            _id
        }
    }
`

export default Detail = (props) => {
    const tv = props.navigation.getParam('tv')
    const [deleteTvSeries, { data }] = useMutation(DELETE_TV)

    const handleEdit = () => {
        props.navigation.navigate('FormTv', { tv: tv })
    }

    const handleDelete = async () => {
        await deleteTvSeries({ variables: { _id: tv._id } })
        props.navigation.navigate('TvSeries')
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: 300, position: 'absolute' }}
                source={{ uri: tv.poster_path }} />

            <View style={styles.backbutton}>
                <ButtonBack navigation={props.navigation} />
            </View>

            <ScrollView>
                <View style={{ width: '100%', height: 300 }}></View>
                <View style={styles.detail}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={handleEdit}>
                            <Text style={[styles.label, { marginRight: 10 }]}>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete}>
                            <Text style={styles.label}>DELETE</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.poster}>
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius: 10 }}
                            source={{ uri: tv.poster_path }} />
                    </View>

                    <View style={styles.title}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{tv.title}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{tv.release_date}</Text>
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Text>{tv.overview}</Text>
                    </View>

                    <View style={styles.scoring}>
                        <View style={{ alignItems: 'center', borderRightWidth: 2, paddingRight: 50 }}>
                            <Text style={styles.scoringlabel}>{tv.status}</Text>
                            <Text style={styles.scoringlabel}>STATUS</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.scoringlabel}>{tv.popularity}</Text>
                            <Text style={styles.scoringlabel}>POPULARITY</Text>
                        </View>
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
    },
    backbutton: {
        position: 'absolute', left: 15, top: 10, zIndex: 1
    },
    detail: {
        backgroundColor: '#fff', paddingHorizontal: 30, paddingBottom: 30
    },
    button: {
        position: 'absolute', right: 30, top: 10, justifyContent: 'flex-end', flexDirection: 'row'
    },
    label: {
        borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1
    },
    poster: {
        height: 175, width: 120, borderRadius: 10, backgroundColor: 'red', position: 'absolute', left: 30, top: -90, justifyContent: 'center', alignItems: 'center'
    },
    title: {
        marginTop: 110, alignItems: 'flex-start'
    },
    scoring: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    scoringlabel: {
        fontSize: 13, fontWeight: 'bold'
    }
});