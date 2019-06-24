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
        this.path       = []
        this.img        = new Image()

        this.frameCount = 0
        this.loopIndex  = 0

        this.scale      = 2
        this.isMoving   = false
        this.logger = new Logger()

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

            this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
            grid.draw(this)
            this.drawReal(grid)

            window.requestAnimationFrame(function(){
                this.move(grid)
            }.bind(this))

        } else {
            grid.path = null
            grid.animate()
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
    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
    }

}

module.exports = Sprite