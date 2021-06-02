import Square from '../square';
import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];
        
        for (let i = 1; i < 2; i ++){
            moves.push(new Square(location.row + i, location.col + i));
            moves.push(new Square(location.row + i, location.col - i));
            moves.push(new Square(location.row - i, location.col - i));
            moves.push(new Square(location.row - i, location.col + i));
            moves.push(new Square(location.row + i, location.col));
            moves.push(new Square(location.row - i, location.col));
            moves.push(new Square(location.row, location.col - i));
            moves.push(new Square(location.row, location.col + i));
        }

        const legalMoves = board.filterMoves(moves);
        return legalMoves;
    }
}
