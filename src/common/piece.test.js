import { describe, expect, test, beforeEach } from "@jest/globals";
import { Piece, ShapeTypes } from "../common/piece";

describe("rotation index calculations", () => {
    test("clockwise", () => {
        let piece = new Piece(ShapeTypes.SHAPE_I);
        expect(piece.rotationIndex).toEqual(0);

        piece.rotationIndex = 2;
        piece.rotateClockwise();
        expect(piece.rotationIndex).toEqual(3);

        piece.rotateClockwise();
        expect(piece.rotationIndex).toEqual(0);
    });

    test("anticlockwise", () => {
        let piece = new Piece(ShapeTypes.SHAPE_I);
        expect(piece.rotationIndex).toEqual(0);

        piece.rotateAnticlockwise();
        expect(piece.rotationIndex).toEqual(3);

        piece.rotateAnticlockwise();
        expect(piece.rotationIndex).toEqual(2);
    });
});

describe("space/width/height calculations", () => {
    /**
     * @param {Number} shapeType
     * @param {String} valuesPerRotation expected [spaceLeft, spaceRight, etc] values for each rotation of the piece
     */
    let testPiece = (shapeType, valuesPerRotation) => {
        let table = [];
        valuesPerRotation.forEach((values, rotationIndex) => {
            let shapeTypeName = Object.keys(ShapeTypes)[shapeType];
            table.push({ shapeTypeName, shapeType, rotationIndex, values });
        });

        test.each(table)(
            "$shapeTypeName@$rotationIndex",
            ({ shapeType, rotationIndex, values }) => {
                let piece = new Piece(shapeType);
                piece.rotationIndex = rotationIndex;

                let [
                    spaceLeft,
                    spaceRight,
                    spaceTop,
                    spaceBottom,
                    width,
                    height,
                ] = values;

                if (spaceLeft !== undefined)
                    expect(piece.spaceLeft).toEqual(spaceLeft);

                if (spaceRight !== undefined)
                    expect(piece.spaceRight).toEqual(spaceRight);

                if (spaceTop !== undefined)
                    expect(piece.spaceTop).toEqual(spaceTop);

                if (spaceBottom !== undefined)
                    expect(piece.spaceBottom).toEqual(spaceBottom);

                if (width !== undefined) expect(piece.width).toEqual(width);

                if (height !== undefined) expect(piece.height).toEqual(height);
            }
        );
    };

    testPiece(ShapeTypes.SHAPE_I, [
        [0, 0, 1, 2, 4, 1],
        [2, 1, 0, 0, 1, 4],
        [0, 0, 2, 1, 4, 1],
        [1, 2, 0, 0, 1, 4],
    ]);
    testPiece(ShapeTypes.SHAPE_J, [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
    testPiece(ShapeTypes.SHAPE_L, [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
    testPiece(ShapeTypes.SHAPE_O, [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);
    testPiece(ShapeTypes.SHAPE_S, [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
    testPiece(ShapeTypes.SHAPE_T, [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
    testPiece(ShapeTypes.SHAPE_Z, [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
});
