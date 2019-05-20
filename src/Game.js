import Style from './Style/canvas.css'
import Grid from "./Generic/Grid"
import Link from "./Sprite/Link"
import Board from "./Board"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprites = []
        sprites.push(new Link())

        let grid = new Grid(800, 600, 50)

        this.board = new Board(grid, sprites)
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
    delete game.board.keyPresses[event.key]
})
