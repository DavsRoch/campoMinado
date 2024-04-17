import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, VirtualizedList} from 'react-native';
import Field from './src/components/Field';
import params from './src/params'
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import { 
        createMinedBoard,
        cloneBoard,
        openField,
        hadExplosion,
        wonGame,
        showMines
 } from './src/functions';
class App extends Component {

  constructor (props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

   createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
   }


  handleOpenField = (row, col) => {
      const board = cloneBoard(this.state.board)
      openField(board, row, col)
      const lost = hadExplosion(board)
      const won = wonGame(board)
    

      if(lost) {
        showMines(board)
        Alert.alert('Perdeeu!', 'Dá zero pra ele')
      }

      if(won) {
        Alert.alert('Parabénsss!', 'Você venceu :D')
      }
   }

  
   render() {
    const columns = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!!</Text>
        <Text>Parametros da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}</Text> 
        <View style={styles.board}>
          <MineField 
            board={this.state.board}
            onOpenField = {this.handleOpenField}
          ></MineField>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
  welcome: {
    alignItems: 'center'
  }
});

export default App;