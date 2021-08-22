function getWinner(squares) {
    const winner_line = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < winner_line.length; i++) {
        const [x, y, z] = winner_line[i]
        if(squares[x] && squares[x] === squares[y] 
            && squares[y] === squares[z]) {
                return ({
                    winner: squares[x],
                    line: winner_line[i],
                })
            }
    }

    return ({
        winner: null,
        line: null,
    });
}

export default getWinner