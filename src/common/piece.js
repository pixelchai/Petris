export const ShapeTypes = Object.freeze({
    SHAPE_I: 0,
    SHAPE_J: 1,
    SHAPE_L: 2,
    SHAPE_O: 3,
    SHAPE_S: 4,
    SHAPE_T: 5,
    SHAPE_Z: 6,
});

const ShapeTensors = Object.freeze([
    // I
    [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
    ],
    // J
    [
        [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 1],
            [0, 1, 0],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1],
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0],
        ],
    ],
    // L
    [
        [
            [0, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [1, 0, 0],
        ],
        [
            [1, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ],
    ],
    // O
    [
        [
            [1, 1],
            [1, 1],
        ],
    ],
    // S
    [
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 0, 1],
        ],
        [
            [0, 0, 0],
            [0, 1, 1],
            [1, 1, 0],
        ],
        [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
    ],
    // T
    [
        [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 1, 0],
            [0, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
    ],
    // Z
    [
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0],
        ],
        [
            [0, 0, 1],
            [0, 1, 1],
            [0, 1, 0],
        ],
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 1, 1],
        ],
        [
            [0, 1, 0],
            [1, 1, 0],
            [1, 0, 0],
        ],
    ],
]);

export class Piece {
    constructor(shapeType) {
        this.shapeType = shapeType;

        this.x = -1;
        this.y = -1;
        this.rotationIndex = 0;

        this.shapeTensor = ShapeTensors[this.shapeType];
    }

    get shape() {
        return this.shapeTensor[this.rotationIndex];
    }

    get spaceLeft() {
        let ret = -1;
        for (let row = 0; row < this.shape.length; row++) {
            for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] == 1) {
                    if (ret == -1 || col < ret) {
                        ret = col;
                    }
                    break;
                }
            }
        }
        return ret;
    }

    get spaceRight() {
        let ret = -1;
        for (let row = 0; row < this.shape.length; row++) {
            for (let col = this.shape[row].length - 1; col >= 0; col--) {
                if (this.shape[row][col] == 1) {
                    let newRet = this.shape[row].length - 1 - col;
                    if (ret == -1 || newRet < ret) {
                        ret = newRet;
                    }
                    break;
                }
            }
        }
        return ret;
    }

    get spaceTop() {
        for (let row = 0; row < this.shape.length; row++) {
            for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] == 1) {
                    return row;
                }
            }
        }
        throw "Empty shape?!"; // theoretically should only happen if shape matrix has no ones
    }

    get spaceBottom() {
        let ret = 0;
        for (let row = this.shape.length - 1; row >= 0; row--) {
            for (let col = 0; col < this.shape[row].length; col++) {
                if (this.shape[row][col] == 1) {
                    return ret;
                }
            }
            ret++;
        }
        throw "Empty shape?!";
    }

    rotateClockwise() {
        this.rotationIndex = (this.rotationIndex + 1) % this.shapeTensor.length;
    }

    rotateAnticlockwise() {
        if (this.rotationIndex > 0) {
            this.rotationIndex -= 1;
        } else if (this.rotationIndex == 0) {
            this.rotationIndex = this.shapeTensor.length - 1;
        } else {
            throw "rotationIndex invalid!"; // should theoretically never happen
        }
    }
}
