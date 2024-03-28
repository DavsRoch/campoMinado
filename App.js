import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Field from './src/components/Field';
import params from './src/params'
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;