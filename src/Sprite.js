import Canvas from "./Generic/Canvas";
import Logger from "./Logger"

/**
 * Abstract sprite
 */
class Sprite extends Canvas{

    constructor() {

        super()

        this.x          = 0
        this.y          = 0

        this.last       = {x: this.x, y: this.y}
        this.path       = []
        this.img        = new Image()

        this.frameCount = 0
        this.loopIndex  = 0

        this.scale      = 2
        this.isMoving   = false
        this.logger     = new Logger()

    }

    update(grid, deltaX, deltaY, direction) {

        if (this.x + deltaX >= 0 && this.x + deltaX <= grid.width - this.width) {
            this.x += deltaX
        }

        if (this.y + deltaY >= 0 && this.y + deltaY <= grid.height - this.width) {
            this.y += deltaY
        }

        this.direction = direction
        this.isMoving = true
    }

    move(grid) {

        if(this.pathReal.length) {

            this.logger.show(grid, this)

            let cell = this.pathReal.shift()
            this.x          = cell.x
            this.y          = cell.y
            this.direction  = cell.direction
            this.loopIndex = (++this.loopIndex) % this.cycleLoop.length

            if(this.pathReal.length == 0) {
                this.loopIndex = 0
            }

            grid.draw(grid)
            this.drawReal(grid)
            window.requestAnimationFrame(function(){
                this.move(grid)
            }.bind(this))

        } else {
            this.path = null
        }
    }

    draw(grid) {

        // position depends grid.scale
        let canvasX = this.x * grid.scale
        let canvasY = this.y * grid.scale

        // center
        canvasX += (grid.scale - this.width) / 4
        canvasY += (grid.scale - this.height) / 4

        this.c.drawImage(
            this.img,
            this.cycleLoop[this.loopIndex] * this.width,
            this.direction * this.height,
            this.width,
            this.height,
            canvasX,
            canvasY,
            this.scaledWidth(),
            this.scaledHeight()
        )
    }

    drawReal(grid) {

        this.c.clearRect(this.last.x, this.last.y, this.scaledWidth(), this.scaledHeight())

        // center
        let canvasX = this.x + (grid.scale - this.width) / 4
        let canvasY = this.y + (grid.scale - this.height) / 4

        this.c.drawImage(
            this.img,
            this.cycleLoop[this.loopIndex] * this.width,
            this.direction * this.height,
            this.width,
            this.height,
            canvasX,
            canvasY,
            this.scaledWidth(),
            this.scaledHeight()
        )

        this.last = {x: canvasX, y: canvasY}


    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
    }

}

module.exports = Sprite