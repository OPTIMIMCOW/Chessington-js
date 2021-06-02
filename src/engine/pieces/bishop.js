import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        
        board.runMoves(1, 1, location, moves, 7);
        board.runMoves(1, -1, location, moves, 7);
        board.runMoves(-1, 1, location, moves, 7);
        board.runMoves(-1, -1, location, moves, 7);
        return moves;
    }
}
