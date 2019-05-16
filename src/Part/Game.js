import Board from "./Board"
import Perso from "./Perso";
import Link from "./Component/Sprite/Link";
import Luigi from "./Component/Sprite/Luigi";
import Mario from "./Component/Sprite/Mario";

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

        this.board      = new Board(this.persos);

        this.board.animate();

    }
}

module.exports = Game