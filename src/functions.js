const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
       return Array(columns).fill(0).map((_, col) => {
            return {
                col,
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
   const board = createBoard(rows, columns)

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
            const diferent = r !== row || column !== c
            const validRow = r >= 0 && r < board.length
            const validCol = c >= 0 && c < board[0].length
        })
        if (diferent && validRow && validCol) {
            neighbors.push(board[r][c])
        }
    })
    return neighbors
}

const safeNeighborhood = (board, row, column) => {
    return getNeighbors(board, row, column).reduce((result, neighbor) => result && !neighbor.mined)
}

const openField = (board, row, col) => {
    const field = board[row][col]
    if (!field.opened) {
        field.opened = true
        if (field.mined) {
            field.exploded = true
        } else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(field => field.mined).length
        }
    }

}
export {
    createMinedBoard
}