import Multi from "./Structure/Multi"
import Canvas from "./Generic/Canvas"
import Mouse from "./Generic/Mouse"
import Pellet from "./Item/Pellet"

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
    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.grid.draw()
        this.pellet.draw()

        var board = this
        this.sprites.forEach(function(sprite){

            board.grid.hightlightSquare(sprite)
            sprite.listen(board.keyPresses, board.grid, board.mouse)
            sprite.draw()

            if(sprite.detectCollision(board.pellet)){
                board.pellet.update()
                sprite.consume(board.pellet)
            }

            board.c.fillText("Eatings: " + sprite.score, 1000, 75)
        })


        window.requestAnimationFrame(this.animate.bind(this))
    }


}

module.exports = Board