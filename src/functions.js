const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
       return Array(columns).fill(0).map((_, col) => {
            return {
                col,
                row,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false, 
                nearMines: 0
            }
        })
    })
}

// [[{...}, {...}, {...}], [{...}, {...}, {...}]]

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length

    let minesSpreaded = 0

    while(minesSpreaded < minesAmount) {
        let col = parseInt(Math.random() * columns)
        let row = parseInt(Math.random() * rows)

        if (!board[row][col].mined) {
            board[row][col].mined = true

            minesSpreaded++
        }
    }

} 

const createMinedBoard = (rows, columns, minesAmount) => {
   let board = createBoard(rows, columns)

   console.log('aaaa');

   spreadMines(board, minesAmount)

   return board
}

//clonar o tabuleiro, para manipular sem interferir no estado

function cloneBoard (board) {
    return board.map((row) => {
        return row.map((field) => {
            return {...field}
        })
    })
}

//função para descobrir vizinhos, 1: iterar dentro de linhas depois de colunas e verificar se nao é o item que foi passado no parametro
// depois ver se é uma linha valida e uma coluna valida se sim inclui na lista de vizinhos

function getNeighbors (board, row, column) {
    const neighbors = []
    const rows  = [row - 1, row, row + 1]
    const columns = [column - 1 , column, column + 1]


    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || column !== c
            const validRow = r >= 0 && r < board.length
            const validCol = c >= 0 && c < board[0].length
            
            if (different && validRow && validCol) {
                neighbors.push(board[r][c])
            }
        })
    })

    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    let neighbors = getNeighbors(board, row, column)
    return neighbors.reduce((result, neighbor) => result && !neighbor.mined)
}

function openField (board, row, col) {
    const field = board[row][col]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, col)) {
           let neighbors = getNeighbors(board, row, col)
           neighbors.forEach(n => openField(board, n.row, n.col))
        } 
        else {
            const neighbors = getNeighbors(board, row, col)
            field.nearMines = neighbors.filter(field => field.mined).length
        }
    }

}

const fields = (board) => [].concat(...board)
const hadExplosion = board => fields(board).filter(field => field.exploded).length >= 1
const pending = field => ((!field.flagged && field.mined) && (!field.mined && !field.opened))
const wonGame = board =>  fields(board).filter(pending).length >= 1
const showMines = board => fields(board).filter(field => field.mined).forEach(f => f.opened = true)
export {
    createMinedBoard,
    cloneBoard,
    showMines,
    openField,
    wonGame,
    hadExplosion
}