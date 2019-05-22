import Multi  from "./Structure/Multi"
import Canvas from "./Generic/Canvas"
import Mouse  from "./Generic/Mouse"
import Pellet from "./Item/Pellet"
import Logger from "./Logger"

/**
 * Board Manager
 */
class Board extends Multi.inherit(Canvas, Mouse) {

    constructor(grid, sprites){

        super()

        this.keyPresses  = []
        this.grid        = grid
        this.sprites     = sprites
        this.pellet      = new Pellet(grid.width + grid.scale, grid.height + grid.scale)
        this.logger      = new Logger()
        this.animate()

    }

    animate() {

        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.grid.draw()
        for (let sprite of Object.values(this.sprites)){
            //this.logger.show(this.grid, this.sprites[0], this.mouse)
            sprite.listen(this.keyPresses, this.grid, this.mouse)
            sprite.draw(this.grid)
        }

       //window.requestAnimationFrame(this.animate.bind(this))
    }
}

module.exports = Board