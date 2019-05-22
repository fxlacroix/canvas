import Multi  from "./Structure/Multi"
import Canvas from "./Generic/Canvas"
import Mouse  from "./Generic/Mouse"
import Pellet from "./Item/Pellet"
import Logger from "./Generic/Logger"

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(grid, sprites){

        super()
        this.keyPresses = []

        this.grid        = grid
        this.sprites     = sprites
        this.pellet      = new Pellet(grid.width + grid.scale, grid.height + grid.scale)
        this.logger      = new Logger()

        window.requestAnimationFrame(this.animate.bind(this))
    }

    animate() {

        var board = this

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.grid.draw()
        this.sprites.forEach(function(sprite){
            // listen keys or mouse
            sprite.listen(board.keyPresses, board.grid, board.mouse)
            sprite.draw(board.grid)
            board.logger.show(board.grid, sprite)
        })
    }
}

module.exports = Board