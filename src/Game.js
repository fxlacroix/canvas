import Grid from "./Grid"
import Luigi from "./Sprite/Luigi"
import Board from "./Board"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprites = [new Luigi()]

        let grid = new Grid(
            16,
            12,
            50,
            sprites
        )

        this.board = new Board(grid, sprites)
    }
}

// create canvas
var game = new Game()

// Generic events
addEventListener('resize', (event) => {
    game.board.canvas.width  = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.grid.mouse.x = event.clientX
    game.board.grid.mouse.y = event.clientY
})

addEventListener('mousedown', function() {
    game.board.grid.mouse.down = true
})

addEventListener('mouseup', function() {
    delete game.board.grid.mouse.down
})

addEventListener('keydown', (event) => {
    game.board.keyPresses[event.key] = true
})

addEventListener('keyup', (event) => {
    delete game.board.keyPresses[event.key]
})
