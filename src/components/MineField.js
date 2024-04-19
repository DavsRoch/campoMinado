import React from 'react';
import { View, StyleSheet } from 'react-native';
import Field from './Field';


export default props => {


    console.log(props.board);

    const rows = props.board.map((row, r) => {
        const columns = row.map((field, i) => {
            return <Field 
            {...field}
            key={i}
            onOpen={() => props.onOpenField(r,i)}>
            </Field>
        })
    
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })
    return rows
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})