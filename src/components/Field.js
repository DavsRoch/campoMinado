import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import params from '../params';
import Mine from './Mine';

export default props => {
    const styleField = [styles.field]

    const { mined, opened, nearMines, exploded } = props

    if (styleField.length === 1) styleField.push(styles.regular)
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)

    let color = null

    if (nearMines > 0) {
        nearMines == 1 ? color = '#2A28D7' : ''
        nearMines == 2 ? color = '#2B520F' : ''
        nearMines > 2 && nearMines < 6 ? color = '#F9060A' : ''
        nearMines >= 6 ? color ='#F221A9' : ''
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, {color: color}]}>
                        {nearMines}
                    </Text> : false
            }
            {mined && opened? <Mine/> : false}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize    
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
});