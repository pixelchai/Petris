// import * as PIXI from "pixi.js";

// const app = new PIXI.Application({
//     width: 720,
//     height: 1280,
//     backgroundColor: 0x0,
//     view: document.querySelector("#scene"),
//     resolution: window.devicePixelRatio || 1,
// });

// const texture = PIXI.Texture.from("res/pz.png");
// const bunny = new PIXI.Sprite(texture);
// bunny.anchor.set(0.5);
// bunny.x = 160;
// bunny.y = 160;
// app.stage.addChild(bunny);

// app.ticker.add((delta) => {
//     bunny.rotation -= 0.01 * delta;
// });

import { Board } from "../common/board";
import { Piece, ShapeTypes } from "../common/piece";

window.board = new Board();
window.board.newFalling();
console.log(window.board.debugString);
