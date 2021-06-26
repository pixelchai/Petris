import { describe, expect, test } from "@jest/globals";
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

describe("spacing calculations", () => {
    /**
     * @param {Piece} piece
     * @param {String} values expected [spaceLeft, spaceRight, etc] values for each rotation of the piece
     */
    let expectPiece = (piece, values) => {
        test(piece.shapeTypeName, () => {
            let remainingValues = [...values];
            // prettier-ignore
            while (remainingValues.length > 0) {
            let [spaceLeft, spaceRight, spaceTop, spaceBottom, width, height] 
                = remainingValues.pop();

            try {
                if (!spaceLeft === undefined)
                    expect(piece.spaceLeft).toEqual(spaceLeft);

                if (!spaceRight === undefined)
                    expect(piece.spaceRight).toEqual(spaceRight);

                if (!spaceTop === undefined)
                    expect(piece.spaceTop).toEqual(spaceTop);

                if (!spaceBottom === undefined)
                    expect(piece.spaceBottom).toEqual(spaceBottom);

                if (!width === undefined)
                    expect(piece.width).toEqual(width);

                if (!height === undefined)
                    expect(piece.height).toEqual(height);
            } finally {
                piece.rotateClockwise();
            }

            }
        });
    };

    expectPiece(new Piece(ShapeTypes.SHAPE_J), [
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
    ]);
});
