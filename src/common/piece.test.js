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
    test("Shape J", () => {
        let piece = new Piece(ShapeTypes.SHAPE_J);
        expect(piece.spaceLeft).toEqual(0);
        expect(piece.spaceRight).toEqual(0);
        expect(piece.spaceTop).toEqual(0);
        expect(piece.spaceBottom).toEqual(1);

        piece.rotateClockwise();
        expect(piece.spaceLeft).toEqual(1);
        expect(piece.spaceRight).toEqual(0);
        expect(piece.spaceTop).toEqual(0);
        expect(piece.spaceBottom).toEqual(0);
    });
});
