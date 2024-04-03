const createBoard = (rows, columns) => {
    Array(rows).fill(0).map((_, row) => {
        Array(columns).fill(0).map((_, col) => {
            return {
                row, 
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

    const minesSpreaded = 0

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

export {
    createMinedBoard
}