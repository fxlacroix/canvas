import Style from './Style/canvas.css'
import Grid from "./Grid"
import Bobo from "./Sprite/Bobo"
import Board from "./Board"
import Utils from "./Helper/Utils"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprites = []
        sprites.push(new Bobo())

        // random world
        let grid = new Grid(
            1000,
            500,
            50
        )

        this.board = new Board(grid, sprites)
        this.board.animate()
    }
}

var game = new Game()

addEventListener('resize', (event) => {
    game.board.canvas.width  = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.mouse.x = event.clientX
    game.board.mouse.y = event.clientY
})

addEventListener('click', function(event) {
    game.board.mouse.x = event.clientX
    game.board.mouse.y = event.clientY
})

addEventListener('keydown', (event) => {
    game.board.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    delete game.board.keyPresses[event.key]
})
