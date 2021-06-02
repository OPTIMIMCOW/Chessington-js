import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); 
        const moves = []; 
        moves.push(new Square(location.row + 2, location.col + 1));
        moves.push(new Square(location.row + 2, location.col - 1));
        moves.push(new Square(location.row + 1, location.col + 2));
        moves.push(new Square(location.row + 1, location.col - 2));
        moves.push(new Square(location.row - 1, location.col + 2));
        moves.push(new Square(location.row - 1, location.col - 2));
        moves.push(new Square(location.row - 2, location.col + 1));
        moves.push(new Square(location.row - 2, location.col - 1));
        const legalMoves = board.filterMoves(moves);
        return legalMoves;
    }
}
