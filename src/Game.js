import Grid from "./Grid"
import Link from "./Sprite/Link"
import Board from "./Board"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprites = []
        sprites.push(new Link())

        // random world
        let grid = new Grid(
            8,
            5,
            100
        )

        this.board = new Board(grid, sprites)
    }
}

// create canvas
var game = new Game()

addEventListener('resize', (event) => {
    game.board.canvas.width  = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.mouse.x = event.clientX
    game.board.mouse.y = event.clientY
})

addEventListener('mousedown', function(event) {
    game.board.mouse.down = true
})

addEventListener('mouseup', function(event) {
    game.board.mouse.down = false
})

addEventListener('keydown', (event) => {
    game.board.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    delete game.board.keyPresses[event.key]
})