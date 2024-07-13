// Graph with all the options (connections) that the chess figure
//   knight has from each square of the chess board

function knightConnections() {
    // Returns all the posible movements for a knight from each square in the board
    // Example: to access Position 4 (row), 5 (column) -> name[4][5]
    let graphArray = [];

    for (let i = 0; i <= 7; i++) {
        // Calculate options for all the squares of one row
        let row = [];
        for (let j = 0; j <= 7; j++) {
            // Calculate options from one square
            let square = [];
            if (i + 1 <= 7 && j + 2 <= 7) square.push([i + 1, j + 2]);
            if (i + 2 <= 7 && j + 1 <= 7) square.push([i + 2, j + 1]);
            if (i + 2 <= 7 && j - 1 >= 0) square.push([i + 2, j - 1]);
            if (i + 1 <= 7 && j - 2 >= 0) square.push([i + 1, j - 2]);
            if (i - 1 >= 0 && j - 2 >= 0) square.push([i - 1, j - 2]);
            if (i - 2 >= 0 && j - 1 >= 0) square.push([i - 2, j - 1]);
            if (i - 2 >= 0 && j + 1 <= 7) square.push([i - 2, j + 1]);
            if (i - 1 >= 0 && j + 2 <= 7) square.push([i - 1, j + 2]);

            row.push(square);
        }
        graphArray.push(row);
    }

    return graphArray;
}

export { knightConnections };
