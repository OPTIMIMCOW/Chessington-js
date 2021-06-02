import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];

        board.runMoves(1, 1, location, moves, 1);
        board.runMoves(1, 0, location, moves, 1);
        board.runMoves(1, -1, location, moves, 1);
        board.runMoves(0, 1, location, moves, 1);
        board.runMoves(0, -1, location, moves, 1);
        board.runMoves(-1, 1, location, moves, 1);
        board.runMoves(-1, 0, location, moves, 1);
        board.runMoves(-1, -1, location, moves, 1);
        return moves;        
    }
}
