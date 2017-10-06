import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const legalMoves = [];

        const sumLocation = location.row + location.col;
        const subtractLocation = location.row - location.col;

        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                const tempSquare = new Square(r, c);
                if (!tempSquare.equals(location)) {
                    if (r + c === sumLocation) {
                        legalMoves.push(tempSquare);
                    } 
                    if (r - c === subtractLocation) {
                        legalMoves.push(tempSquare);
                    }
                }
            }
        }
        return legalMoves;
    }
}
