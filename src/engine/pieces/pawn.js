import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
        this.firstMove=true;
    }


    getAvailableMoves(board) {
        let location = board.findPiece(this)

        if(this.firstMove===true){

            this.firstMove = false;

            if (this.player === Player.WHITE) {
                return [Square.at(location.row + 2, location.col), Square.at(location.row + 1, location.col)]
            } else {
                return [Square.at(location.row - 2, location.col), Square.at(location.row - 1, location.col)]
            }
            

        }else{

            if (this.player === Player.WHITE) {
                return Square.at(location.row + 1, location.col)
            } else {
                return Square.at(location.row - 1, location.col)
            }

        }
 
    }


}
