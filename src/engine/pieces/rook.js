import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const legalMoves=[];
        for (let c = 0; c < 8; c++){
            if (location.col !== c){
                legalMoves.push(Square.at(location.row, c));
            }
        }
        for (let r = 0; r < 8; r++){
            if (location.row !== r){
                legalMoves.push(Square.at(r, location.col));
            }
        }
        return legalMoves;
    }
}
