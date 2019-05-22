//const EasyAStar = require('')

import Style from './Style/canvas.css'
import Grid from "./Grid"
import Link from "./Sprite/Link"
import Board from "./Board"
import Utils from "./Helper/Utils"

/**
 * Game Manager
 */
class Game {

    constructor() {

        let sprites = []
        sprites.push(new Link())

        // random world
        let grid = new Grid(
            800,
            600,
            50
        )

        this.board = new Board(grid, sprites)
    }
}

var game = new Game()

addEventListener('resize', (event) => {
    game.board.canvas.width  = innerWidth
    game.board.canvas.height = innerHeight
})

addEventListener('mousemove', function(event) {
    game.board.mouse.x = event.clientX - 50
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
