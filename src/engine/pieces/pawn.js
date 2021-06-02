import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this); 
        const moves = []; 
        let tempSquare;
        
        if (this.player === Player.WHITE) {
            tempSquare = new Square(location.row + 1, location.col);
            if(!(board.getPiece(tempSquare))){
                moves.push(tempSquare);
                if (location.row === 1) {
                    tempSquare = new Square(location.row + 2, location.col);
                    if(!(board.getPiece(tempSquare))){
                        moves.push(tempSquare);
                    }
                }
            }            
        } else {
            tempSquare = new Square(location.row - 1, location.col);
            if(!(board.getPiece(tempSquare))){
                moves.push(tempSquare);
                if (location.row === 6) {
                    tempSquare = new Square(location.row - 2, location.col);
                    if(!(board.getPiece(tempSquare))){
                        moves.push(tempSquare);
                    }
                }
            }
        }   
        const legalMoves = board.filterMoves(moves);
        return legalMoves;
    }
}
