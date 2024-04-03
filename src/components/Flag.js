import React from 'react';
import { View, StyleSheet } from 'react-native'

export default props => {
    const { bigger } = props
    return (
        <View>
            <View style={styles.container}></View>
            <View style={[styles.flagpole, bigger? styles.flagpoleBigger : null]}></View>
            <View style={[styles.flag, bigger? styles.flagBigger : null]}></View>
            <View style={[styles.base1, bigger? styles.base1Bigger : null]}></View>
            <View style={[styles.base2, bigger? styles.base2Bigger : null]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        marginLeft: 9,
        width: 2,
        backgroundColor: '#222',
    },
    flag: {
        position: 'absolute',
        height: 6,
        width: 9,
        backgroundColor: '#F22'
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginTop: 10,
        marginLeft: 7
    },
    base2:{
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginTop: 12,
        marginLeft: 5
    },   
    flagpoleBigger:{
        position: 'absolute',
        height: 25,
        marginLeft: 14,
        width: 3,
        backgroundColor: '#222',
    },
    flagBigger: {
        position: 'absolute',
        height: 9,
        width: 14,
        backgroundColor: '#F22'
    },
    base1Bigger: {
        position: 'absolute',
        height: 3,
        width: 8,
        backgroundColor: '#222',
        marginTop: 19,
        marginLeft: 12
    },
    base2Bigger: {
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginTop: 21,
        marginLeft: 10
    }
})