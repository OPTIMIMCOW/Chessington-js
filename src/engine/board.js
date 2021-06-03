import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';
import Pawn from './pieces/pawn';
import Queen from './pieces/queen';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
        }

        if (movingPiece instanceof Pawn && toSquare.row === 0 || toSquare.row === 7) {
            const queen = new Queen(movingPiece.player);
            this.setPiece(toSquare, queen);
        }

        this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
    }

    onBoard(square) {
        return square.row < 8 && square.row >= 0 && square.col < 8 && square.col >= 0;
    }

    filterMovesOnBoard(moves) {
        return moves.filter(square => square.row < 8 && square.row >= 0 && square.col < 8 && square.col >= 0);
    }

    runMoves(row, col, location, moves, maxMoves, ourPiece) {
        for (let i = 1; i <= maxMoves; i++) {
            let tempSquare = new Square(location.row + (i * row), location.col + (i * col));
            if (this.onBoard(tempSquare)) {
                const getPiece = this.getPiece(tempSquare);
                if (!getPiece) {
                    moves.push(tempSquare);
                } else {
                    if (ourPiece.player === getPiece.player || getPiece instanceof King) {
                        break;
                    } else {
                        moves.push(tempSquare);
                        break;
                    }
                }
            } else {
                break;
            }
        }
    }
}
