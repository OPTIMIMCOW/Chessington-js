import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        let tempSquare;
        let go1 = true;
        let go2 = true;
        let go3 = true;
        let go4 = true;
        
        for (let i = 1; i < 8; i ++){  
            tempSquare = new Square(location.row + i, location.col + i)
            if (!board.getPiece(tempSquare) && go1) {
                moves.push(tempSquare);
            } else {
                go1 = false;
            }
            tempSquare = new Square(location.row + i, location.col - i)
            if (!board.getPiece(tempSquare) && go2) {
                moves.push(tempSquare);
            } else {
                go2 = false;
            }
            tempSquare = new Square(location.row - i, location.col - i)
            if (!board.getPiece(tempSquare) && go3) {
                moves.push(tempSquare);
            } else {
                go3 = false;
            }
            tempSquare = new Square(location.row - i, location.col + i)
            if (!board.getPiece(tempSquare) && go4) {
                moves.push(tempSquare);
            } else {
                go4 = false;
            }
        }
        const legalMoves = board.filterMoves(moves);
        return legalMoves;
    }
}
