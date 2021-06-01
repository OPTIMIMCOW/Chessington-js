import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

        // locate rook in board board.findpiece(this);
        // test left 
        // for loop that increments to the right until: 
        // check for edge
        // check for piece
        // check colour of piece to indicate move - that breaks the loop

        // test up
        // test right 
        // test down
        //return array holding all possible moves

        const location = board.findPiece(this);
        const arrayLegalMoves=[];
        for (let c = 0; c < 8; c++){
            if (location.col !== c){
                arrayLegalMoves.push(Square.at(location.row, c));
            }
        }
        for (let r = 0; r < 8; r++){
            if (location.row !== r){
                arrayLegalMoves.push(Square.at(r, location.col));
            }
        }

        // // LEFT CASE
        // for(let i=1;i<8; i++){
        //     if(location.row > 0){
        //         let testSquare = new Square(location.row,location.col - i);
        //         console.log(location.row);
        //         console.log(testSquare);
        //         let otherPiece = board.getPiece(testSquare);
        //         if(otherPiece){
        //             if(otherPiece.player === this.player){
        //                 i=8; // exit the loop
        //             }else{
        //                 i=8;
        //                 arrayLegalMoves.push(testSquare);
        //                 console.log(arrayLegalMoves.push(testSquare));

        //             }

        //         } else {
        //             arrayLegalMoves.push(testSquare);
        //             console.log(arrayLegalMoves.push(testSquare));
        //         }
        //     }else{
        //         i=8; // exit the for loop
        //     }
        // }
        return arrayLegalMoves;
    }
}
