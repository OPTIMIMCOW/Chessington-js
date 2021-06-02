import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); 
        let moves = [];
        board.runMoves(2, 1, location, moves, 1);
        board.runMoves(2, -1, location, moves, 1);
        board.runMoves(1, 2, location, moves, 1);
        board.runMoves(1, -2, location, moves, 1);
        board.runMoves(-1, 2, location, moves, 1);
        board.runMoves(-1, -2, location, moves, 1);
        board.runMoves(-2, 1, location, moves, 1);
        board.runMoves(-2, -1, location, moves, 1);
        return moves;
    }
}
