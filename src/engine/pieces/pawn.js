import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    killPawnMove(row, col, location, moves, board) {
        const tempSquare = new Square(location.row + row, location.col + col);
        if (board.onBoard(tempSquare) && board.getPiece(tempSquare) && board.getPiece(tempSquare).player !== this.player && !(board.getPiece(tempSquare) instanceof King)) {
            moves.push(tempSquare);
        }
    }

    runPawnMove(rowVector, location, moves, board) {

        const tempSquare = new Square(location.row + rowVector, location.col);
        if (board.onBoard(tempSquare)) {
            const getPiece = board.getPiece(tempSquare);
            if (!getPiece) {
                moves.push(tempSquare);
                return true;
            } else {
                return false;
            }

        }
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        const moves = [];

        if (this.player === Player.WHITE) {
            const firstSquareEmpty = this.runPawnMove(1, location, moves, board);
            if (firstSquareEmpty && location.row === 1) {
                this.runPawnMove(2, location, moves, board);
            }
            this.killPawnMove(1, 1, location, moves, board);
            this.killPawnMove(1, -1, location, moves, board);
        } else {
            const firstSquareEmpty = this.runPawnMove(-1, location, moves, board);
            if (firstSquareEmpty && location.row === 6) {
                this.runPawnMove(-2, location, moves, board);
            }
            this.killPawnMove(-1, 1, location, moves, board);
            this.killPawnMove(-1, -1, location, moves, board);
        }
        console.log(moves);
        return moves;
    }
}
