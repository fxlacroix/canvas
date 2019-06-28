import Canvas from "./Generic/Canvas";
import Logger from "./Logger"

/**
 * Abstract sprite
 */
class Sprite extends Canvas{

    constructor(x, y) {

        super()

        this.x          = 0
        this.y          = 0

        this.last       = {x: this.x, y: this.y}
        this.path       = []
        this.img        = new Image()

        this.loopIndex  = 0
        this.path = []
        this.pathReal = []

        this.logger     = new Logger()

    }

    draw(grid) {

        this.c.drawImage(
            this.img,
            this.cycleLoop[this.loopIndex] * this.width,
            this.direction * this.height,
            this.width,
            this.height,
            this.x + (grid.scale - this.width)  / 4,
            this.y + (grid.scale - this.height) / 4,
            this.scaledWidth(),
            this.scaledHeight()
        )
    }

    delete(scale) {

        this.c.clearRect(this.last.x + (scale- this.width)  / 4, this.last.y + (scale- this.height) / 4, this.scaledWidth(), this.scaledHeight())
    }

    move(grid) {

        if(this.pathReal.length) {

            //this.logger.show(grid, this)
            let cell = this.pathReal.shift()
            this.last.x = this.x = cell.x
            this.last.y = this.y = cell.y
            this.direction  = cell.direction
            this.loopIndex = (++this.loopIndex) % this.cycleLoop.length

            if(this.pathReal.length == 0) {
                this.loopIndex = 0
            }

            // delete, draw grid, draw sprite
            this.draw(grid)

        } else {
            this.path       = []
            this.isMoving   = false
        }
    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
    }
}

module.exports = Sprite