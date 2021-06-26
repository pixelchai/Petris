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
            // fixme out of bounds
            field[j + piece.y][i + piece.x] |= element;
        });
    });
}

export default class Board {
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
    }

    /**
     * Field with fallingPiece committed
     */
    get field() {}
}
