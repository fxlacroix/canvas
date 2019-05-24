import Multi from "../Structure/Multi";
import Canvas from "../Generic/Canvas";
import Mouse from "../Generic/Mouse";

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

    }

    scaledWidth() {
        return this.scale * this.width
    }

    scaledHeight() {
        return this.scale * this.height
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
}

module.exports = Sprite