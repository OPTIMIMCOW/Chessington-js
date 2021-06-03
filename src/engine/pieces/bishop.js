import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        const maxMoves = 7;
        board.runMoves(1, 1, location, moves, maxMoves, this);
        board.runMoves(1, -1, location, moves, maxMoves, this);
        board.runMoves(-1, 1, location, moves, maxMoves, this);
        board.runMoves(-1, -1, location, moves, maxMoves, this);
        return moves;
    }
}
