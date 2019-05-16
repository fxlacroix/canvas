import Board from "./Board"
//import
import Perso from "./Perso";
import Link from "../Sprite/Link";
import Luigi from "../Sprite/Luigi";
import Mario from "../Sprite/Mario";

/**
 * Game Manager
 */
class Game {

    constructor() {

        this.title = "toDefined"

        this.persos = []
        this.persos.push(new Perso(new Link()))
        this.persos.push(new Perso(new Luigi()))
        this.persos.push(new Perso(new Mario()))

        this.board = new Board(this.persos);

        this.board.animate();

    }
}

module.exports = Game