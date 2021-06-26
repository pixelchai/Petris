import { describe, expect, test } from "@jest/globals";
import { Piece, ShapeTypes } from "../common/piece";

test("rotation index calculations", () => {
    let piece = new Piece(ShapeTypes.SHAPE_I);
    expect(piece.rotationIndex).toEqual(0);
});
