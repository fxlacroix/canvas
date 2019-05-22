import Multi from "../Structure/Multi";
import Canvas from "../Generic/Canvas";
import Mouse from "../Generic/Mouse";

/**
 * Abstract sprite
 */
class AbstractSprite {

    constructor() {
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

        this.drawFrame(grid, this.cycleLoop[this.loopIndex], this.direction, this.x, this.y)
    }

    drawFrame(grid, frameX, frameY, gridX, gridY) {

        let canvasX = gridX * grid.scale
        let canvasY = gridY * grid.scale

        this.c.drawImage(
            this.img,
            frameX * this.width,
            frameY * this.height,
            this.width,
            this.height,
            canvasX,
            canvasY,
            this.scaledWidth(),
            this.scaledHeight()
        )
    }
}

module.exports = AbstractSprite