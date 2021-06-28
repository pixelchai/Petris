import { getRandomInt, shuffle } from "../common/utils";
import { ShapeTypes, Piece } from "../common/piece";

export const BoardFlags = Object.freeze({
    EMPTY: 0,
    AT_REST: 1 << 0,
    GAME_OVER: 1 << 1,
});

/**
 * in-place bitwise OR the given field with the given piece
 * @param {*} field
 * @param {*} piece
 */
export function commitPiece(field, piece) {
    piece.shape.forEach((shapeRow, j) => {
        shapeRow.forEach((element, i) => {
            let targetY = j + piece.y;
            let targetX = i + piece.x;

            if (0 <= targetY && targetY <= field.length - 1) {
                if (0 <= targetX && targetX <= field[targetY].length - 1) {
                    field[targetY][targetX] |= element;
                }
            }
        });
    });
}

export class Board {
    constructor() {
        this.fieldWidth = 10;
        this.fieldHeight = 22;

        // initialise empty field
        this.staticField = [];
        for (let j = 0; j < this.fieldHeight; j++) {
            let row = [];
            for (let i = 0; i < this.fieldWidth; i++) {
                row.push(0);
            }
            this.staticField.push(row);
        }

        this.flags = BoardFlags.EMPTY;
        this.fallingPiece = null;

        this.shapeTypeQueue = [];
    }

    /**
     * Field with fallingPiece committed
     */
    get field() {
        if (this.fallingPiece !== null) {
            // deep copy of staticField
            let retField = [];
            for (let i = 0; i < this.staticField.length; i++) {
                retField[i] = this.staticField[i].slice();
            }

            commitPiece(retField, this.fallingPiece);
            return retField;
        } else {
            return this.staticField;
        }
    }

    get debugString() {
        let ret = "";
        this.field.forEach((fieldRow, j) => {
            fieldRow.forEach((element, i) => {
                if (element) {
                    ret += "#";
                } else {
                    ret += ".";
                }
            });
            ret += "\n";
        });
        return ret;
    }

    newFalling() {
        if (this.shapeTypeQueue.length <= 0) {
            // generate new shuffled shape type queue
            this.shapeTypeQueue = Object.values(ShapeTypes); // returns a copy
            shuffle(this.shapeTypeQueue);
        }
        let newShapeType = this.shapeTypeQueue.pop();
        let newPiece = new Piece(newShapeType);
        newPiece.x = getRandomInt(
            0 - newPiece.spaceLeft,
            this.fieldWidth - newPiece.spaceRight
        );
        newPiece.y = 0 - newPiece.spaceTop;

        // todo check overlap
        this.fallingPiece = newPiece;
    }

    step() {
        this.flags = BoardFlags.EMPTY;
    }
}
