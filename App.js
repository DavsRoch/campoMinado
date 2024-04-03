import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Field from './src/components/Field';
import params from './src/params'
import Flag from './src/components/Flag';
class App extends Component {
  state = {
    count: 0,
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Iniciando o Mines!!</Text>
        <Text>Parametros da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text> 
        <Field/>       
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field mined opened />
        <Field mined />
        <Field mined opened exploded />
        <Field flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default App;