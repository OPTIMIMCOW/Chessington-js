import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); 
        const moves = [];
        const maxMoves = 1;
        board.runMoves(2, 1, location, moves, maxMoves, this);
        board.runMoves(2, -1, location, moves, maxMoves, this);
        board.runMoves(1, 2, location, moves, maxMoves, this);
        board.runMoves(1, -2, location, moves, maxMoves, this);
        board.runMoves(-1, 2, location, moves, maxMoves, this);
        board.runMoves(-1, -2, location, moves, maxMoves, this);
        board.runMoves(-2, 1, location, moves, maxMoves, this);
        board.runMoves(-2, -1, location, moves, maxMoves, this);
        return moves;
    }
}
