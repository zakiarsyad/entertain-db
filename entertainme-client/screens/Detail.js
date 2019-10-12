import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'

export default Detail = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.45, width: '100%', justifyContent: 'flex-start', backgroundColor: '#f8f8f8', paddingHorizontal: 15 }}>
                <ButtonBack navigation={props.navigation} />
            </View>

            <View style={{ flex: 0.55, backgroundColor: '#fff' }}>
                <TouchableOpacity style={{ position: 'absolute', right:30, top: 30, justifyContent:'flex-end', flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10, borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1 }}>EDIT</Text>
                    <Text style={{ borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1 }}>DELETE</Text>
                </TouchableOpacity>

                <View style={{ height: 175, width: 120, borderRadius: 10, backgroundColor: 'red', position: 'absolute', left: 30, top: -90, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>INI GAMBAR</Text>
                </View>

                <View style={{ marginTop: 110, paddingHorizontal: 30, alignItems: 'flex-start' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>title</Text>
                    <Text style={{ fontWeight: 'bold' }}>release date</Text>
                </View>

                <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
                    <Text>During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.</Text>
                </View>

                <View style={{ paddingHorizontal: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>7.6</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>VOTE AVG</Text>
                    </View>
                    <View style={{ alignItems: 'center', borderLeftWidth: 2, borderRightWidth: 2, paddingHorizontal: 25 }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>All ages</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>STATUS</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>204.357</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 }}>POPULARITY</Text>
                    </View>
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
        marginTop: Constants.statusBarHeight
    }
});