import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    testMoves(testCol, testRow, legalMoves) {
        if (!((testRow > 7) || (testRow < 0))) {
            if (!((testCol > 7) || (testCol < 0))) {
                const tempSquare = new Square(testRow, testCol);
                legalMoves.push(tempSquare);
            }
        }
        return legalMoves;
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); //why is this grey?
        let legalMoves = []; //why is this grey?

        for (let i = -1; i <= 1; i = i + 2) {
            for (let j = -1; j <= 1; j = j + 2) {
                const leftRightCol = location.col + 2 * i;
                const leftRightRow = location.row + 1 * j;
                legalMoves = this.testMoves(leftRightCol, leftRightRow, legalMoves);
                const UpDownCol = location.col + 1 * i;
                const UpDownRow = location.row + 2 * j;
                legalMoves = this.testMoves(UpDownCol, UpDownRow, legalMoves);
            }
        }
        return legalMoves;
    }
}
