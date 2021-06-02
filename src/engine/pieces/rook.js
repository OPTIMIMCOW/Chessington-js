import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let moves = [];
        board.runMoves(1, 0, location, moves, 7);
        board.runMoves(-1, 0, location, moves, 7);
        board.runMoves(0, 1, location, moves, 7);
        board.runMoves(0, -1, location, moves, 7);
        return moves;
    }
}
