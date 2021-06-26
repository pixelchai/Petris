export const ShapeTypes = Object.freeze({
    SHAPE_I: 0,
    SHAPE_J: 1,
    SHAPE_L: 2,
    SHAPE_O: 3,
    SHAPE_S: 4,
    SHAPE_T: 5,
    SHAPE_Z: 6,
});

const SHAPE_MATRIX_WIDTH = 4;
const SHAPE_MATRIX_HEIGHT = 4;

// prettier-ignore
const ShapeTensors = Object.freeze([
    // I
    [
        [
            0b0000,
            0b1111,
            0b0000,
            0b0000,
        ],
        [
            0b0010,
            0b0010,
            0b0010,
            0b0010,
        ],
        [
            0b0000,
            0b0000,
            0b1111,
            0b0000,
        ],
        [
            0b0100,
            0b0100,
            0b0100,
            0b0100,
        ]
    ]
]);

export default class Piece {
    constructor(shapeType) {
        this.shapeType = shapeType;

        this.x = -1;
        this.y = -1;
        this.rotationIndex = 0;

        this.shapeTensor = ShapeTensors[this.shapeType];
    }
}
