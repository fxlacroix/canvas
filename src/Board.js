import Multi from "./Structure/Multi";
import Canvas from './Generic/Canvas'
import Mouse from './Generic/Mouse'

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(grid, sprites){

        super()
        this.keyPresses = []

        this.grid        = grid
        this.sprites     = sprites
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.grid.draw()

        var board = this
        this.sprites.forEach(function(sprite){

            board.grid.hightlightSquare(sprite)
            sprite.listen(board.keyPresses, board.grid)
            sprite.draw()

        })

        window.requestAnimationFrame(this.animate.bind(this))
    }


}

module.exports = Board