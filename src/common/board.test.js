import { describe, expect, test } from "@jest/globals";
import { commitPiece, Board } from "../common/board";
import { Piece, ShapeTypes } from "../common/piece";

// test("committing", () => {
//     let testMatrix = [
//         [0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0],
//     ];

//     // standard commit piece
//     let testPiece = new Piece(ShapeTypes.SHAPE_J, 0, 0);
//     commitPiece(testMatrix, testPiece);
//     expect(testMatrix).toEqual([
//         [1, 0, 0, 0, 0],
//         [1, 1, 1, 0, 0],
//         [0, 0, 0, 0, 0],
//     ]);

//     // commit overlapping (NB: 0 does not trump 1)
//     testPiece.x = 1;
//     commitPiece(testMatrix, testPiece);
//     expect(testMatrix).toEqual([
//         [1, 1, 0, 0, 0],
//         [1, 1, 1, 1, 0],
//         [0, 0, 0, 0, 0],
//     ]);

//     // commit with matrix partially out of bounds
//     // fixme !!
//     testPiece.rotationIndex = 3;
//     testPiece.x = 3;
//     commitPiece(testMatrix, testPiece);
//     expect(testMatrix).toEqual([
//         [1, 1, 0, 0, 1],
//         [1, 1, 1, 1, 1],
//         [0, 0, 0, 1, 1],
//     ]);
// });

let board = new Board();
board.newFalling();
console.log(board.debugString);
