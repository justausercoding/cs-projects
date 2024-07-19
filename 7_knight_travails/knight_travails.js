import { knightConnections } from "./modules/knight_connections.js";
import { Node } from "./modules/node.js";

function knightMoves(start, goal) {
    let completePath = calculateMoves(start, goal);

    console.log(`=> You made it in ${completePath.length - 1} moves! Here is your path:`);
    completePath.forEach((oneMove) => console.log(oneMove));
}

function calculateMoves(start, goal) {
    if (start[0] === goal[0] && start[1] === goal[1]) {
        return [start];
    }

    let graph = knightConnections();
    let queue = [];

    let rootNode = new Node(start, graph[start[0]][start[1]], [start]);
    queue.push(rootNode);

    let completePath;
    while (true) {
        let parentNode = queue.shift();

        // -- 'parentNode.children': Array with all the possible moves from the current square
        //       e.g.: [ [1, 7], [6, 4] , ... ]
        for (let move of parentNode.possibleMoves) {
            // -- 'steps': Array with the path taken by its parents e.g.: [ [0, 1], [1, 5] , ... ]
            let steps = [...parentNode.path];
            steps.push(move);

            if (move[0] === goal[0] && move[1] === goal[1]) {
                completePath = steps;
                return completePath;
            } else {
                let childNode = new Node(move, graph[move[0]][move[1]], steps);
                queue.push(childNode);
            }
        }
    }
}

knightMoves([1, 2], [1, 2]);
knightMoves([1, 2], [2, 4]);
knightMoves([1, 2], [2, 5]);
knightMoves([0, 0], [7, 7]);
