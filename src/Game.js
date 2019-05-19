import Style from './Style/canvas.css'
import Board from "./Board"
import Perso from "./Perso";
import Luigi from "./Sprite/Luigi";

/**
 * Game Manager
 */
class Game {

    constructor() {

        this.title = "toDefined"

        this.persos = []
        this.persos.push(new Perso(new Luigi()))

        this.board = new Board(this.persos)
        this.board.animate()
    }
}

var game = new Game()

addEventListener('resize', (event) => {
    game.board.canvas.width = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.mouse.x = event.clientX
    game.board.mouse.y = event.clientY
})

addEventListener('keydown', (event) => {
    game.board.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    game.board.keyPresses[event.key] = false
})
